import { GameDB } from '../db/game';
import { PlayerDB } from '../db/player';
import { PlayerStatsDB } from '../db/playerStats';
import { TeamDB } from '../db/team';

export interface GameStatsSchema {
  game: GameDB;
  teams: TeamDB[];
  players: PlayerDB[];
  playerStats: PlayerStatsDB[];
}
