import axios from 'axios';
import { config } from '../config';
import { DateElement, Game, Schedule } from '../../../common/interfaces';

const { base_url, routes } = config.nhl_service;
export class NHLService {
  private readonly _baseUrl: string;

  constructor() {
    this._baseUrl = base_url;
  }

  getUrlForRoute = (route: string) => `${this._baseUrl}${route}`;

  getTodaysGames = async (): Promise<Game[]> => {
    try {
      const todaysSchedule: Schedule = await this.getSchedule();
      return todaysSchedule.dates[0].games;
    } catch (e) {
      throw e;
    }
  };

  getSchedule = async (): Promise<Schedule> => {
    try {
      const response = await axios.get<Schedule>(
        this.getUrlForRoute(routes.schedule)
      );
      return response.data;
    } catch (e) {
      throw e;
    }
  };
}
