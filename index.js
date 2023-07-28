const express = require("express");
const cors = require('cors');

const app = express()

require('dotenv').config()

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const regionRouter = require('./routes/regionRoute')
const { errorHandler } = require("./middleware/errorHandler")

/** MAIN ROUTE */
app.use("/api/v1", regionRouter)


/** GLOBAL ERROR ROUTE */
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})