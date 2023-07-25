const pool = require("../database/index");

const regionsController = {
   createRegion: async (req, res) => {
      try {
         const id = '1'
         const { name } = req.body
         console.log(req.body);
         const sql = "insert into regions (name) values (?)"
         const [rows, fields] = await pool.query(sql, [name])
         res.json({
             data: rows
         })
     } catch (error) {
         console.log(error)
         res.json({
             status: "error"
         })
     }
   }
}

module.exports = regionsController;