import express from 'express';
import { getPlayerStatsHandler } from '../controllers/playerStats';

const router = express.Router();

/**
 * @openapi
 * /api/playerStats:
 *   get:
 *     tags:
 *       - Stats
 *     summary: Get player stats by combination of player id and/or game id
 *     parameters:
 *       - name: player_id
 *         in: query
 *         description: The player_id of the player stat we would like to retrieve
 *         schema:
 *           type: integer
 *       - name: game_id
 *         in: query
 *         description: The game_id of the player stat we would like to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Stats for the requested ids
 *       500:
 *         description: Internal server error
 */

router.get('/api/playerStats', getPlayerStatsHandler);

export default router;
