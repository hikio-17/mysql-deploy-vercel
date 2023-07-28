const { nanoid } = require('nanoid')
const pool = require('../database/index')

const createRegion = async ({ name }) => {
  const id = `region-${nanoid()}`
  const sql = 'insert into Regions (id, name) values (?, ?)'
  const [rows, fields] = await pool.query(sql, [id, name])
  
  return fields
}

module.exports = {
  createRegion
}
