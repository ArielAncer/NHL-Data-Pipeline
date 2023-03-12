import express from 'express';
import { getPlayerStatsHandler } from '../controllers/player.controller';

const router = express.Router();

/**
 * @openapi
 * '/api/playerStats':
 *  get:
 *     tags:
 *     - Player
 *     summary: Get all player specific stats
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *       400:
 *         description: Bad request
 */

router.get('/api/playerStats', getPlayerStatsHandler);

export default router;
