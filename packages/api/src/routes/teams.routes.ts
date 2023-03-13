import express from 'express';
import { getTeamsHandler } from '../controllers/teams.controller';

const router = express.Router();

/**
 * @openapi
 * /api/teams:
 *   get:
 *     tags:
 *       - Teams
 *     summary: Get a team by ID
 *     parameters:
 *       - name: team_id
 *         in: query
 *         description: The ID of the team to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The requested team
 *       500:
 *         description: Internal server error
 */

router.get('/api/teams', getTeamsHandler);

export default router;
