// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
const planRoutes = require('./planRoutes');
const authRoutes = require('./authRoutes');
// const projectRoutes = require('./projectRoutes');
const cliqueRoutes = require('./cliqueRoutes');

router.use('/api/events', eventsRoutes);
router.use('/api/plans', planRoutes);
//router.use('/users', userRoutes);
router.use('/auth', authRoutes);
// router.use('/projects', projectRoutes);
router.use('/api/cliques', cliqueRoutes)

module.exports = router;