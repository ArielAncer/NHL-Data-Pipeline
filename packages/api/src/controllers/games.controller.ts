import { NHLDatabase } from '../../../common/utilities/postgres';
import { TABLE_NAMES } from '../../../common/enums';

export const getGamesHandler = async (req, res) => {
  const { game_id } = req.query;
  try {
    const result = await NHLDatabase.getDataRowsForIds(TABLE_NAMES.Games, {
      game_id
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
