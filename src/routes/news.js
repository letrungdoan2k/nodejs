const express = require('express');
const router = express.Router();
const newController = require('../app/controlers/NewsController');

router.use('/', newController.index);

module.exports = router;
