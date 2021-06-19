// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const eventRoutes = require('./eventRoutes');
const planRoutes = require('./planRoutes');
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/events', eventRoutes);
router.use('/plans', planRoutes);
module.exports = router;