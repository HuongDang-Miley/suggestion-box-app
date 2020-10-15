const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()

const port =process.env.PORT
app.use(morgan('dev'))

app.get('/', (req,res) => {
    return res.status(200).json({confirmation: 'success'})
})
app.listen(port, () => console.log(`listening on ${port}`))