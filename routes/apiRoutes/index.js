const router = require('express').Router()
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes')

router.use(animalRoutes)
router.use(zookeeperRoutes)

module.exports = router;


// this page is being used as a central hub for all routing functions we may want to add to the application

