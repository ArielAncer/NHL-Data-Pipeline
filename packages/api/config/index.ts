import { type IDatabaseConfig } from '../../common/interfaces/config';

require('dotenv').config();

export const config: IDatabaseConfig = {
  username: process.env.PG_USER_NAME,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  database: process.env.PG_DATABASE
};
