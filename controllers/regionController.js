const { nanoid } = require('nanoid');
const Region = require('../models/region')

const createRegionHandler = async (req, res) => {
  try {
    const id = `region-${nanoid()}`
    const region = await Region.create({ id, name: req.body.name })

    res.status(200).json({
      status: 'success',
      data: {
        region
      }
    })
  } catch (error) {
   console.log(error);
   res.status(500).json({
      status: 'error',
      data: error
   })
  }
}

module.exports = {
   createRegionHandler
}
