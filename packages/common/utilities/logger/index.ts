import winston, { format, type Logger } from 'winston';
const { printf, label, timestamp, combine } = format;

const LOG_DIRECTORY = 'logs';

export class CustomLogger {
  private static _instance: Logger;

  private constructor() {}

  static getInstance = (serviceName: string) => {
    if (!CustomLogger._instance) {
      const format = combine(
        label({ label: serviceName }),
        timestamp(),
        printf(({ level, message, label, timestamp }) => {
          return `[${label}] ${timestamp} ${level}: ${message}`;
        })
      );

      this._init(serviceName, format);
    }

    return CustomLogger._instance;
  };

  private static _init = (
    serviceName: string,
    format: winston.Logform.Format
  ) => {
    const logger = winston.createLogger({
      level: 'info',
      format: format,
      defaultMeta: { service: serviceName },
      transports: [
        new winston.transports.File({
          filename: `${LOG_DIRECTORY}/error.log`,
          level: 'error'
        }),
        new winston.transports.File({
          filename: `${LOG_DIRECTORY}/combined.log`
        })
      ]
    });

    // If not in production then log to the `console`
    if (process.env.NODE_ENV !== 'production') {
      logger.add(
        new winston.transports.Console({
          format
        })
      );
    }

    CustomLogger._instance = logger;
  };
}
