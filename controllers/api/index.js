// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
const planRoutes = require('./planRoutes');

router.use('/events', eventsRoutes);
router.use('/plans', planRoutes);
router.use('/users', userRoutes);

module.exports = router;