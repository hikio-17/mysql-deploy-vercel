const express = require('express');
const { createRegionHandler } = require('../controller/regionController');

const router = express.Router();

router.post('/', createRegionHandler);

module.exports = router;