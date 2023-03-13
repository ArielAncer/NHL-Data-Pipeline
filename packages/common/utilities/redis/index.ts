import * as redis from 'redis';
import { type Logger } from 'winston';

export class RedisCache {
  private static _instance;

  static getInstance = (logger: Logger) => {
    if (!RedisCache._instance) {
      this._init(logger);
    }

    return RedisCache._instance;
  };

  private static _init = (logger: Logger) => {
    this._instance = redis.createClient();

    this._instance.on('connect', () => {
      logger.info('redis cache connected!');
    });

    this._instance.on('error', (err) => {
      logger.error(`redis cache error: ${err}`);
    });

    this._instance.connect();
  };
}
