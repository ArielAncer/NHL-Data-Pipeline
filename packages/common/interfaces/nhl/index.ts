import {
  RosterStatus,
  TriCodeEnum,
  PositionCode,
  PositionType,
  PrimaryPositionAbbreviation,
  CurrentPeriodOrdinal,
  PlayerType,
  Description,
  EventTypeID
} from '../../enums';

export interface GameData {
  copyright?: string;
  gamePk?: number;
  link?: string;
  metaData?: MetaData;
  gameData?: GameDataClass;
  liveData?: LiveData;
}

export interface GameDataClass {
  game?: Game;
  datetime?: Datetime;
  status?: Status;
  teams?: GameDataTeams;
  players?: { [key: string]: PlayerValue };
  venue?: CurrentTeamClass;
}

export interface Datetime {
  dateTime?: Date | string;
  endDateTime?: Date | string;
}

export interface PlayerValue {
  id?: number;
  fullName?: string;
  link?: string;
  firstName?: string;
  lastName?: string;
  primaryNumber?: string;
  birthDate?: Date | string;
  currentAge?: number;
  birthCity?: string;
  birthStateProvince?: string;
  birthCountry?: string;
  nationality?: string;
  height?: string;
  weight?: number;
  active?: boolean;
  alternateCaptain?: boolean;
  captain?: boolean;
  rookie?: boolean;
  shootsCatches?: string;
  rosterStatus?: RosterStatus;
  currentTeam?: CurrentTeamClass;
  primaryPosition?: Position;
}

export interface CurrentTeamClass {
  id?: number;
  name?: string;
  link?: string;
  triCode?: TriCodeEnum;
  abbreviation?: TriCodeEnum;
}

export interface Position {
  code?: PositionCode;
  name?: PositionType;
  type?: PositionType;
  abbreviation?: PrimaryPositionAbbreviation;
}

export interface Status {
  abstractGameState?: string;
  codedGameState?: string;
  detailedState?: string;
  statusCode?: string;
  startTimeTBD?: boolean;
}

export interface GameDataTeams {
  away?: PurpleAway;
  home?: PurpleAway;
}

export interface PurpleAway {
  id?: number;
  name?: string;
  link?: string;
  venue?: PurpleVenue;
  abbreviation?: TriCodeEnum;
  triCode?: TriCodeEnum;
  teamName?: string;
  locationName?: string;
  firstYearOfPlay?: string;
  division?: Division;
  conference?: CurrentTeamClass;
  franchise?: Franchise;
  shortName?: string;
  officialSiteUrl?: string;
  franchiseId?: number;
  active?: boolean;
}

export interface Division {
  id?: number;
  name?: string;
  nameShort?: string;
  link?: string;
  abbreviation?: string;
  triCode?: TriCodeEnum;
}

export interface Franchise {
  franchiseId?: number;
  teamName?: string;
  link?: string;
}

export interface PurpleVenue {
  id?: number;
  name?: string;
  link?: string;
  city?: string;
  timeZone?: TimeZone;
}

export interface TimeZone {
  id?: string;
  offset?: number;
  tz?: string;
}

export interface LiveData {
  plays?: Plays;
  linescore?: Linescore;
  boxscore?: Boxscore;
  decisions?: Decisions;
}

export interface Boxscore {
  teams?: BoxscoreTeams;
  officials?: Official[];
}

export interface Official {
  official?: FirstStar;
  officialType?: string;
}

export interface FirstStar {
  id?: number;
  fullName?: string;
  link?: string;
}

export interface BoxscoreTeams {
  away?: Team;
  home?: Team;
}

export interface Team {
  team?: CurrentTeamClass;
  teamStats?: TeamStats;
  players?: Players;
  goalies?: number[];
  skaters?: number[];
  onIce?: number[];
  onIcePlus?: OnIcePlus[];
  scratches?: number[];
  penaltyBox?: any[];
  coaches?: Coach[];
}

export interface Coach {
  person?: CoachPerson;
  position?: Position;
}

export interface CoachPerson {
  fullName?: string;
  link?: string;
}

export interface OnIcePlus {
  playerId?: number;
  shiftDuration?: number;
  stamina?: number;
}

export interface Players {
  [key: string]: Skater;
}

export interface Skater {
  person?: Person;
  jerseyNumber?: string;
  position?: Position;
  stats?: { skaterStats: SkaterStats };
}

export interface Person {
  id?: number;
  fullName?: string;
  link?: string;
  shootsCatches?: string;
  rosterStatus?: RosterStatus;
}

export interface SkaterStats {
  timeOnIce?: string;
  assists?: number;
  goals?: number;
  shots?: number;
  hits?: number;
  powerPlayGoals?: number;
  powerPlayAssists?: number;
  penaltyMinutes?: number;
  faceOffPct?: number;
  faceOffWins?: number;
  faceoffTaken?: number;
  takeaways?: number;
  giveaways?: number;
  shortHandedGoals?: number;
  shortHandedAssists?: number;
  blocked?: number;
  plusMinus?: number;
  evenTimeOnIce?: string;
  powerPlayTimeOnIce?: string;
  shortHandedTimeOnIce?: string;
  pim?: number;
  saves?: number;
  powerPlaySaves?: number;
  shortHandedSaves?: number;
  evenSaves?: number;
  shortHandedShotsAgainst?: number;
  evenShotsAgainst?: number;
  powerPlayShotsAgainst?: number;
  decision?: string;
  savePercentage?: number;
  powerPlaySavePercentage?: number;
  shortHandedSavePercentage?: number;
  evenStrengthSavePercentage?: number;
}

export interface TeamStats {
  teamSkaterStats?: TeamSkaterStats;
}

export interface TeamSkaterStats {
  goals?: number;
  pim?: number;
  shots?: number;
  powerPlayPercentage?: string;
  powerPlayGoals?: number;
  powerPlayOpportunities?: number;
  faceOffWinPercentage?: string;
  blocked?: number;
  takeaways?: number;
  giveaways?: number;
  hits?: number;
}

export interface Home {
  team?: CurrentTeamClass;
  teamStats?: TeamStats;
  players?: Players;
  goalies?: number[];
  skaters?: number[];
  onIce?: number[];
  onIcePlus?: OnIcePlus[];
  scratches?: number[];
  penaltyBox?: any[];
  coaches?: Coach[];
}

export interface Decisions {
  winner?: FirstStar;
  loser?: FirstStar;
  firstStar?: FirstStar;
  secondStar?: FirstStar;
  thirdStar?: FirstStar;
}

export interface Linescore {
  currentPeriod?: number;
  currentPeriodOrdinal?: CurrentPeriodOrdinal;
  currentPeriodTimeRemaining?: string;
  periods?: Period[];
  shootoutInfo?: ShootoutInfo;
  teams?: LinescoreTeams;
  powerPlayStrength?: string;
  hasShootout?: boolean;
  intermissionInfo?: IntermissionInfo;
  powerPlayInfo?: PowerPlayInfo;
}

export interface IntermissionInfo {
  intermissionTimeRemaining?: number;
  intermissionTimeElapsed?: number;
  inIntermission?: boolean;
}

export interface Period {
  periodType?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  num?: number;
  ordinalNum?: CurrentPeriodOrdinal;
  home?: PeriodAway;
  away?: PeriodAway;
}

export interface PeriodAway {
  goals?: number;
  shotsOnGoal?: number;
  rinkSide?: string;
}

export interface PowerPlayInfo {
  situationTimeRemaining?: number;
  situationTimeElapsed?: number;
  inSituation?: boolean;
}

export interface ShootoutInfo {
  away?: ShootoutInfoAway;
  home?: ShootoutInfoAway;
}

export interface ShootoutInfoAway {
  scores?: number;
  attempts?: number;
}

export interface LinescoreTeams {
  home?: TentacledAway;
  away?: TentacledAway;
}

export interface TentacledAway {
  team?: Division;
  goals?: number;
  shotsOnGoal?: number;
  goaliePulled?: boolean;
  numSkaters?: number;
  powerPlay?: boolean;
}

export interface Plays {
  allPlays?: AllPlay[];
  scoringPlays?: number[];
  penaltyPlays?: number[];
  playsByPeriod?: PlaysByPeriod[];
  currentPlay?: CurrentPlay;
}

export interface AllPlay {
  result?: AllPlayResult;
  about?: About;
  coordinates?: AllPlayCoordinates;
  players?: PlayerElement[];
  team?: CurrentTeamClass;
}

export interface About {
  eventIdx?: number;
  eventId?: number;
  period?: number;
  periodType?: string;
  ordinalNum?: CurrentPeriodOrdinal;
  periodTime?: string;
  periodTimeRemaining?: string;
  dateTime?: Date | string;
  goals?: Goals;
}

export interface Goals {
  away?: number;
  home?: number;
}

export interface AllPlayCoordinates {
  x?: number;
  y?: number;
}

export interface PlayerElement {
  player?: FirstStar;
  playerType?: PlayerType;
  seasonTotal?: number;
}

export interface AllPlayResult {
  event?: Description;
  eventCode?: string;
  eventTypeId?: EventTypeID;
  description?: string;
  secondaryType?: string;
  penaltySeverity?: string;
  penaltyMinutes?: number;
  strength?: Strength;
  gameWinningGoal?: boolean;
  emptyNet?: boolean;
}

export interface Strength {
  code?: string;
  name?: string;
}

export interface CurrentPlay {
  result?: CurrentPlayResult;
  about?: About;
  coordinates?: any;
}

export interface CurrentPlayResult {
  event?: Description;
  eventCode?: string;
  eventTypeId?: EventTypeID;
  description?: Description;
}

export interface PlaysByPeriod {
  startIndex?: number;
  plays?: number[];
  endIndex?: number;
}

export interface MetaData {
  wait?: number;
  timeStamp?: string;
}

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
  date?: Date | string;
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
  pk?: number;
  link?: string;
  gameType?: string;
  season?: string;
  gameDate?: Date | string;
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
