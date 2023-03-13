import express from 'express';
import { getGamesHandler } from '../controllers/games.controller';

const router = express.Router();
/**
 * @openapi
 * /api/games:
 *   get:
 *     tags:
 *       - Games
 *     description: Get a game by ID
 *     parameters:
 *       - name: game_id
 *         in: query
 *         description: The ID of the game to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested game
 *       500:
 *         description: Internal server error
 */

router.get('/api/games', getGamesHandler);

export default router;
