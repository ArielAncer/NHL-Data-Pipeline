import express from 'express';
import playerRoutes from './players.routes';
import teamRoutes from './teams.routes';
import gameRoutes from './games.routes';
import statsRoutes from './playerStats.routes';
const router = express.Router();

/**
 * @openapi
 * /healthcheck:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is running
 */
router.get('/healthcheck', (req, res) => res.sendStatus(200));

// Player Routes
router.use(playerRoutes);

// Game Routes
router.use(gameRoutes);

// Team Routes
router.use(teamRoutes);

// Stats Routes
router.use(statsRoutes);

export default router;
