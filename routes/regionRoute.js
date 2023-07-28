const express = require('express');
const { createRegionHandler } = require('../controller/region.controller');

const router = express.Router();

router.post('/', createRegionHandler);

module.exports = router;