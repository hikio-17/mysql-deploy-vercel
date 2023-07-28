const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express()

require('dotenv').config()

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const regionRouter = require('./routes/regionRoute');
// const userRoute = require('./routes/userRoute');
const { errorHandler } = require("./middleware/errorHandler")
const db = require('./models');

/** MAIN ROUTE */
// app.use("/api/v1", regionRouter);
// app.use('/api/v1', userRoute);
app.use('/', (req, res) => {
    res.send('Welcome to API');
});

/** GLOBAL ERROR ROUTE */
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server is running'))