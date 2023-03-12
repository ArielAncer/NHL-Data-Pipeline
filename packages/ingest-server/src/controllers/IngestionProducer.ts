import { dpLogger } from '..';
import { producer } from '../kafka/brokers/producer';
import { NHLService } from '../services/NHLService';
import { Game } from '../../../common/interfaces';
import { GAME_STATUS } from '../../../common/enums';

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

  produceGameData = async (game: Game) => {
    try {
      if (this._isGameLive(game)) {
        await this._produceData(this._topic, game);
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

  _produceData = async (topic: string, data: any): Promise<void> => {
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
