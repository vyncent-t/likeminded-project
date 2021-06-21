// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventsRoutes = require('./eventsRoutes');
const planRoutes = require('./planRoutes');
const authRoutes = require('./authRoutes');

router.use('/events', eventsRoutes);
router.use('/plans', planRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;