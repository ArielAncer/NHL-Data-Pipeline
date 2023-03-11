import winston, { format, type Logger } from "winston";
const { printf, label, timestamp, combine } = format;

export class CustomLogger {
  _serviceName: string;
  _format: winston.Logform.Format;
  _dir = "logs";
  _instance: Logger;

  constructor(serviceName: string) {
    this._serviceName = serviceName;
    this._format = combine(
      label({ label: this._serviceName }),
      timestamp(),
      printf(({ level, message, label, timestamp }) => {
        return `[${label}] ${timestamp} ${level}: ${message}`;
      })
    );

    this._instance = this._init();
  }

  getInstance = () => this._instance;

  private _init = (): Logger => {
    const logger = winston.createLogger({
      level: "info",
      format: this._format,
      defaultMeta: { service: this._serviceName },
      transports: [
        new winston.transports.File({
          filename: `${this._dir}/error.log`,
          level: "error",
        }),
        new winston.transports.File({ filename: `${this._dir}/combined.log` }),
      ],
    });

    // If not in production then log to the `console`
    if (process.env.NODE_ENV !== "production") {
      logger.add(
        new winston.transports.Console({
          format: this._format,
        })
      );
    }

    return logger;
  };
}
