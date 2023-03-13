import { TABLE_NAMES } from '../../../common/enums';
import { NHLDatabase } from '../../../common/utilities/postgres';

export const getPlayerStatsHandler = async (req, res) => {
  const { player_id, game_id } = req.query;
  try {
    const result = await NHLDatabase.getDataRowsForIds(
      TABLE_NAMES.PlayerStats,
      { game_id, player_id }
    );
    if (result.rows.length === 0) {
      res.json([]);
    } else {
      res.json(result.rows);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
