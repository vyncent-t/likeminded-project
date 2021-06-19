// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
router.use('/events', eventsRoutes);
router.use('/users', userRoutes);

module.exports = router;