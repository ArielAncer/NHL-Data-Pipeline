import {
  BoxscoreTeams,
  GameData,
  GameStatsSchema,
  PlayerValue,
  Skater
} from '../../../common/interfaces';
import { PlayerDB } from '../../../common/interfaces/db/player';
import { PlayerStatsDB } from '../../../common/interfaces/db/playerStats';
import { TeamDB } from '../../../common/interfaces/db/team';

export class NHLDataMapper {
  private constructor() {}

  static _mapPlayersToDBSchema = (data: GameData): PlayerDB[] => {
    const { players } = data.gameData;
    const playerValues: PlayerValue[] = Object.values(players);

    return playerValues?.map((p: PlayerValue) => {
      return {
        player_id: p.id,
        team_id: p.currentTeam.id,
        player_name: p.fullName,
        player_age: p.currentAge,
        player_number: Number(p.primaryNumber),
        player_position: `${p.primaryPosition.name} ${p.primaryPosition.type}`
      };
    });
  };

  static _mapTeamsToDBSchema = (rawTeams: BoxscoreTeams): TeamDB[] => {
    return [rawTeams.home, rawTeams.away]?.map((t) => {
      const { team } = t;
      return {
        team_id: team.id,
        team_name: team.name
      };
    });
  };

  static _mapPlayerStatsToDBSchema = (data: GameData): PlayerStatsDB[] => {
    const { game } = data.gameData;
    const {
      boxscore: { teams }
    } = data.liveData;
    const players = [
      ...Object.values(teams.home.players),
      ...Object.values(teams.away.players)
    ];

    return players.map((s: Skater) => {
      const stats = s?.stats?.skaterStats;
      return {
        player_id: s.person.id,
        game_id: game?.pk | game?.gamePk,
        penalty_minutes: stats?.penaltyMinutes || 0,
        assists: stats?.assists || 0,
        goals: stats?.goals || 0,
        hits: stats?.hits || 0,
        points: 0 // [Question?] I could not find this data point in the documentation
      };
    });
  };

  static mapGameDataToStatsSchema = (data: GameData): GameStatsSchema => {
    const { game } = data.gameData;
    const {
      boxscore: { teams }
    } = data.liveData;

    const mappedData: GameStatsSchema = {
      game: {
        game_id: game.pk | game.gamePk,
        team_id: teams.home.team.id,
        opponent_team_id: teams.away.team.id
      },
      teams: [...this._mapTeamsToDBSchema(teams)],
      players: [...this._mapPlayersToDBSchema(data)],
      playerStats: [...this._mapPlayerStatsToDBSchema(data)]
    };

    return mappedData;
  };
}
