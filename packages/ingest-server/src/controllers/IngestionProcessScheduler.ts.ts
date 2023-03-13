import { config } from '../config';
import { dpLogger } from '..';
import { Game, Status } from '../../../common/interfaces';
import { NHLService } from '../services/NHLService';
import { IngestionProducer } from './IngestionProducer';
import { RedisCache } from '../../../common/utilities/redis';

const INGEST_POLL_INTERVAL_MS = config.ingest_poll_interval_ms;

export class IngestionProcessScheduler {
  _ingestProducer: IngestionProducer;
  _nhlService: NHLService;
  _redisClient: any;

  constructor(topic: string) {
    this._redisClient = RedisCache.getInstance(dpLogger);
    this._ingestProducer = new IngestionProducer(topic);
    this._nhlService = new NHLService();
  }

  /**
   * Pulls data from NHL Service for game status changes
   * Uses setInterval to repeatedly make API calls
   */
  pollApiForGameStatusChanges = async () => {
    setInterval(async () => {
      try {
        const games: Game[] = await this._nhlService.getTodaysGames();

        for (const game of games) {
          const { status } = game;
          const key = `gamePk: ${game.gamePk}`;
          // Retrieve the cached status from Redis based on its Game ID
          const cachedStatus = await this._redisClient.get(key);

          if (cachedStatus) {
            const parsedCachedStatus: Status = JSON.parse(cachedStatus);
            // The game status has changed
            if (
              parsedCachedStatus.statusCode !== status.statusCode ||
              config.always_ingest_fg
            ) {
              dpLogger.info(
                `Game ${game.gamePk}'s status has changed from ${parsedCachedStatus.detailedState} to ${status.detailedState}`
              );

              // Fetch and map the data we want to save
              await this._ingestProducer.publishGameStatsData(game);
            }
          } else {
            this._redisClient.set(key, JSON.stringify(game.status));
          }
        }
      } catch (e) {
        dpLogger.error(e.message);
      }
    }, INGEST_POLL_INTERVAL_MS);
  };
}
