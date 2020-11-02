const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const suggestionRoutes = require('./routes/suggestions/suggestionRoutes.js')
const commentRoutes = require('./routes/comments/commentRoutes')
const port = process.env.PORT
app.use(morgan('dev'))

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`MongoDB Error: ${err}`))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// for post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/suggestions', suggestionRoutes)
app.use('/api/v1/comments', commentRoutes)

app.listen(port, () => console.log(`listening on ${port}`))

