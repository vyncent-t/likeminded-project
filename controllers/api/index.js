// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const cliqueRoutes = require('./cliqueRoutes')
const eventsRoutes = require('./eventsRoutes');
const planRoutes = require('./planRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/cliques', cliqueRoutes)
router.use('/events', eventsRoutes);
router.use('/plans', planRoutes);


module.exports = router;