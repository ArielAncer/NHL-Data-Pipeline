import { NHLDatabase } from '../../../common/utilities/postgres';
import { TABLE_NAMES } from '../../../common/enums';

export const getPlayersHandler = async (req, res) => {
  const { player_id } = req.query;
  try {
    const result = await NHLDatabase.getDataRowsForIds(TABLE_NAMES.Players, {
      player_id
    });
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
