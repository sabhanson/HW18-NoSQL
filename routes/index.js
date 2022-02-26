const router = require('express').Router();
//gives this file access to the routes in the api folder
const apiRoutes = require('./api');

//makes a route using /api as the url path
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send(`oops, that's not a good route`);
});

module.exports = router;
