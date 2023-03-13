import express from 'express';
import { getPlayersHandler } from '../controllers/players.controller';

const router = express.Router();

/**
 * @openapi
 * /api/players:
 *   get:
 *     tags:
 *       - Players
 *     summary: Get a player by ID
 *     parameters:
 *       - name: player_id
 *         in: query
 *         description: The ID of the player to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested player
 *       500:
 *         description: Internal server error
 */

router.get('/api/players', getPlayersHandler);

export default router;
