import { Pool } from 'pg';
import { IDatabaseConfig } from '../../interfaces';

export class NHLDatabase {
  private static _instance;

  static getInstance = async (config: IDatabaseConfig) => {
    if (!NHLDatabase._instance) {
      await this._init(config);
    }

    return NHLDatabase._instance;
  };

  private static _init = async (config: IDatabaseConfig) => {
    const { username, password, host, port, database } = config;
    try {
      const pool = new Pool({
        connectionString: `postgres://${username}:${password}@${host}:${port}/${database}`
      });

      this._instance = await pool.connect();
    } catch (e) {
      throw e;
    }
  };

  private static _getDBValuesFromObject = (data: any) =>
    Object.keys(data).map((key) => data[key]);

  private static _getDBColumnNamesFromObject = (data: any) =>
    Object.keys(data).join(', ');

  private static _getPlaceholdersFromObject = (data: any) =>
    Object.keys(data)
      .map((_, i) => `$${i + 1}`)
      .join(', ');

  private static _getDBQueryParamsFromObject = (data: any) => {
    return {
      values: NHLDatabase._getDBValuesFromObject(data),
      columns: NHLDatabase._getDBColumnNamesFromObject(data),
      placeholders: NHLDatabase._getPlaceholdersFromObject(data)
    };
  };

  static upsertToDatabase = async (
    idColumnName: string,
    tableName: string,
    data: any
  ) => {
    try {
      const { values, columns, placeholders } =
        NHLDatabase._getDBQueryParamsFromObject(data);

      const sql = `
      INSERT INTO ${tableName} (${columns}) 
      VALUES (${placeholders})
      ON CONFLICT (${idColumnName}) DO UPDATE SET ${Object.keys(data)
        .map((key, i) => `${key} = $${i + 1}`)
        .join(', ')}`;

      await NHLDatabase._instance.query(sql, values);
    } catch (e) {
      throw e;
    }
  };

  disconnect = async () => {
    await NHLDatabase._instance.release();
  };
}
