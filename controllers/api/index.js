// main page
// grabs home routes , router.use 

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const cliqueRoutes = require('./cliqueRoutes')
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.use('/cliques', cliqueRoutes)

module.exports = router;