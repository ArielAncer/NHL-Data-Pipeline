import { dpLogger } from '..';
import { Game, GameDB, GameStatsSchema } from '../../../common/interfaces';
import { consumer } from '../kafka/brokers/consumer';
import { NHLDatabase } from '../../../common/utilities/postgres';
import { config } from '../config';

export class IngestionConsumer {
  _topic: string;
  _dbClient: any;

  constructor(topic: string) {
    this._topic = topic;
    this._dbClient = NHLDatabase.getInstance(config.nhl_data_store);
  }

  init = async () => {
    await this._consumeData(this._topic).catch(dpLogger.error);
  };

  _sinkDataToDatabase = async (gameStats: GameStatsSchema) => {
    try {
      const { game, teams, players, playerStats } = gameStats;
      await NHLDatabase.upsertToDatabase('game_id', 'Games', game);

      for (const team of teams) {
        await NHLDatabase.upsertToDatabase('team_id', 'Teams', team);
      }

      for (const player of players) {
        await NHLDatabase.upsertToDatabase('player_id', 'Players', player);
      }

      for (const playerStat of playerStats) {
        await NHLDatabase.upsertToDatabase(
          'game_id, player_id',
          'PlayerStats',
          playerStat
        );
      }
    } catch (e) {
      dpLogger.error(e.message);
    }
  };

  _consumeData = async (topic: string): Promise<void> => {
    await consumer.connect();
    dpLogger.info(`Kafka consumer for topic ${topic} connected`);

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const gameStats: GameStatsSchema = JSON.parse(message.value.toString());

        await this._sinkDataToDatabase(gameStats);

        dpLogger.info(
          JSON.stringify({
            partition,
            offset: message.offset,
            value: message.value.toString()
          })
        );
      }
    });
  };
}
