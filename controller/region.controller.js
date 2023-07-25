const regionsService = require('../service/regionService');

const regionsController = {
   createRegion: async (req, res) => {
      const data = await regionsService.create(req.body);

      res.status(200).json({
         status: 'success',
         data
      })
   }
}

module.exports = regionsController;