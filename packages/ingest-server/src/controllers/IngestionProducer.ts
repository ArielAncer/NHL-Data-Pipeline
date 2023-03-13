import { dpLogger } from '..';
import { producer } from '../kafka/brokers/producer';
import { NHLService } from '../services/NHLService';
import { Game, GameData, GameStatsSchema } from '../../../common/interfaces';
import { GAME_STATUS } from '../../../common/enums';
import { NHLDataMapper } from '../mappers/NHLDataMapper';
import { config } from '../config';

export class IngestionProducer {
  _nhlService: NHLService;
  _topic: string;

  constructor(topic: string) {
    this._nhlService = new NHLService();
    this._topic = topic;
    this._initProducer();
  }

  _initProducer = () => {
    producer.connect().then((_) => {
      dpLogger.info('Producer connected');
    });
  };

  _isGameLive = (game: Game) =>
    [GAME_STATUS.Live, GAME_STATUS.LiveCritical].includes(
      Number(game.status.statusCode)
    );

  _getGameStatsData = async (link: string) => {
    try {
      const gameData: GameData = await this._nhlService.getGameDataForLink(
        link
      );
      return NHLDataMapper.mapGameDataToStatsSchema(gameData);
    } catch (e) {
      dpLogger.error(e.message);
    }
  };

  publishGameStatsData = async (game: Game) => {
    try {
      if (this._isGameLive(game) || config.always_ingest_fg) {
        const data: GameStatsSchema = await this._getGameStatsData(game.link);
        await this._publishData(this._topic, data);
      }
    } catch (e) {
      dpLogger.error(e.message);
    }
  };

  _getKafkaMessage: any = (item) => {
    return {
      value: Buffer.from(JSON.stringify(item))
    };
  };

  _publishData = async (topic: string, data: any): Promise<void> => {
    try {
      const message = this._getKafkaMessage(data);
      await producer.send({
        topic,
        messages: [message]
      });
      dpLogger.info(`Message ${message.value} sent to Kafka Topic ${topic}`);
    } catch (e) {
      throw e;
    }
  };
}
