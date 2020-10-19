const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const suggestionRoutes = require ('./routers/suggestionRoutes.js')
const port = process.env.PORT
app.use(morgan('dev'))


// for post
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`MongoDB Error: ${err}`))


app.use('/api/v1/suggestions', suggestionRoutes)

app.listen(port, () => console.log(`listening on ${port}`))

