const mongoose = require('mongoose')
const moment = require('moment')
const CommentSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'suggestion' },
    comment: { type: String, required: true },
    date: { type: String, default: () => moment().format('dddd, MMMM Do YYYY, h:mm:ss a') }
})

module.exports = mongoose.model('comment', CommentSchema)
