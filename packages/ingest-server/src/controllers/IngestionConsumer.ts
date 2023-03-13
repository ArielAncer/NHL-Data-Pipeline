import { dpLogger } from '..';
import { Game, GameDB } from '../../../common/interfaces';
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

  _consumeData = async (topic: string): Promise<void> => {
    await consumer.connect();
    dpLogger.info(`Kafka consumer for topic ${topic} connected`);

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const game: Game = JSON.parse(message.value.toString());
        try {
          // Test DB Row
          const pgGame: GameDB = {
            game_id: game.gamePk,
            opponent_team_id: 5,
            assists: 6,
            goals: 7,
            hits: 7,
            points: 7,
            penalty_minutes: 7
          };

          await NHLDatabase.upsertToDatabase('game_id', 'Games', pgGame);
        } catch (e) {
          dpLogger.error(e.message);
        }

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
