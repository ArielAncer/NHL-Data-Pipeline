export interface Schedule {
  copyright?: string;
  totalItems?: number;
  totalEvents?: number;
  totalGames?: number;
  totalMatches?: number;
  metaData?: MetaData;
  wait?: number;
  dates?: DateElement[];
}

export interface DateElement {
  date?: Date;
  totalItems?: number;
  totalEvents?: number;
  totalGames?: number;
  totalMatches?: number;
  games?: Game[];
  events?: any[];
  matches?: any[];
}

export interface Game {
  gamePk?: number;
  link?: string;
  gameType?: string;
  season?: string;
  gameDate?: Date;
  status?: Status;
  teams?: Teams;
  venue?: Venue;
  content?: Content;
}

export interface Content {
  link?: string;
}

export interface Status {
  abstractGameState?: string;
  codedGameState?: string;
  detailedState?: string;
  statusCode?: string;
  startTimeTBD?: boolean;
}

export interface Teams {
  away?: Away;
  home?: Away;
}

export interface Away {
  leagueRecord?: LeagueRecord;
  score?: number;
  team?: Venue;
}

export interface LeagueRecord {
  wins?: number;
  losses?: number;
  ot?: number;
  type?: string;
}

export interface Venue {
  id?: number;
  name?: string;
  link?: string;
}

export interface MetaData {
  timeStamp?: string;
}
