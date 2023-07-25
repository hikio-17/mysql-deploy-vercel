const express = require('express');
const regionsController = require('../controller/region.controller');

const router = express.Router();

router.post('/', regionsController.createRegion);

module.exports = router;