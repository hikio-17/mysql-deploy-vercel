const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const regionRouter = require('./routes/regionRoute')
const { errorHandler } = require("./middleware/errorHandler")

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/regions", regionRouter)
app.use("/api/v1/auth", authRouter)

app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})