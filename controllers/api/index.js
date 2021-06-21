// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cliqueRoutes = require('./cliqueRoutes')
const eventsRoutes = require('./eventsRoutes');
const planRoutes = require('./planRoutes');
const authRoutes = require('./authRoutes');

router.use('/users', userRoutes);
router.use('/cliques', cliqueRoutes)
router.use('/events', eventsRoutes);
router.use('/plans', planRoutes);
router.use('/auth', authRoutes);


module.exports = router;