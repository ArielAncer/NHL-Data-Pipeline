import { config } from '../config'

export class NHLService {
  private readonly _baseUrl: string

  constructor () {
    this._baseUrl = config.nhl_service.base_url
  }
}
