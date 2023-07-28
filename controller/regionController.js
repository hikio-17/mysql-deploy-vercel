const asyncHandler = require('express-async-handler');
const { createRegion } = require('../service/regionService');

const createRegionHandler = asyncHandler(async (req, res) => {
  await createRegion(req.body);

  res.status(200).json({
    status: 'success',
    message: 'Berhasil membuat region baru'
  })
})

module.exports = {
   createRegionHandler
};