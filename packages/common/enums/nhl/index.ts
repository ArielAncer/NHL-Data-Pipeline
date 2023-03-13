export enum PositionCode {
  C = 'C',
  D = 'D',
  G = 'G',
  Hc = 'HC',
  L = 'L',
  NA = 'N/A',
  R = 'R'
}
export enum TriCodeEnum {
  Bos = 'BOS',
  Det = 'DET'
}

export enum PrimaryPositionAbbreviation {
  C = 'C',
  D = 'D',
  G = 'G',
  HeadCoach = 'Head Coach',
  Lw = 'LW',
  NA = 'N/A',
  Rw = 'RW'
}

export enum PositionType {
  Center = 'Center',
  Defenseman = 'Defenseman',
  Forward = 'Forward',
  Goalie = 'Goalie',
  HeadCoach = 'Head Coach',
  LeftWing = 'Left Wing',
  RightWing = 'Right Wing',
  Unknown = 'Unknown'
}

export enum RosterStatus {
  N = 'N',
  Y = 'Y'
}

export enum CurrentPeriodOrdinal {
  The1St = '1st',
  The2Nd = '2nd',
  The3RD = '3rd'
}

export enum PlayerType {
  Assist = 'Assist',
  Blocker = 'Blocker',
  DrewBy = 'DrewBy',
  Goalie = 'Goalie',
  Hittee = 'Hittee',
  Hitter = 'Hitter',
  Loser = 'Loser',
  PenaltyOn = 'PenaltyOn',
  PlayerID = 'PlayerID',
  Scorer = 'Scorer',
  Shooter = 'Shooter',
  Unknown = 'Unknown',
  Winner = 'Winner'
}

export enum Description {
  BlockedShot = 'Blocked Shot',
  Faceoff = 'Faceoff',
  GameEnd = 'Game End',
  GameOfficial = 'Game Official',
  GameScheduled = 'Game Scheduled',
  Giveaway = 'Giveaway',
  Goal = 'Goal',
  Hit = 'Hit',
  MissedShot = 'Missed Shot',
  Penalty = 'Penalty',
  PeriodEnd = 'Period End',
  PeriodOfficial = 'Period Official',
  PeriodReady = 'Period Ready',
  PeriodStart = 'Period Start',
  Shot = 'Shot',
  Stoppage = 'Stoppage',
  Takeaway = 'Takeaway'
}

export enum EventTypeID {
  BlockedShot = 'BLOCKED_SHOT',
  Faceoff = 'FACEOFF',
  GameEnd = 'GAME_END',
  GameOfficial = 'GAME_OFFICIAL',
  GameScheduled = 'GAME_SCHEDULED',
  Giveaway = 'GIVEAWAY',
  Goal = 'GOAL',
  Hit = 'HIT',
  MissedShot = 'MISSED_SHOT',
  Penalty = 'PENALTY',
  PeriodEnd = 'PERIOD_END',
  PeriodOfficial = 'PERIOD_OFFICIAL',
  PeriodReady = 'PERIOD_READY',
  PeriodStart = 'PERIOD_START',
  Shot = 'SHOT',
  Stop = 'STOP',
  Takeaway = 'TAKEAWAY'
}

export enum GAME_STATUS {
  Scheduled = 1,
  PreGame,
  Live,
  LiveCritical,
  GameOver,
  Final,
  FinalDuplicate,
  ScheduledTBD,
  Postponed
}
