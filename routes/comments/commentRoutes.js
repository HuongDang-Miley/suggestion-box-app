const router = require('express').Router();
const CommentSchema = require('./models/CommentSchema');
const SuggestionSchema = require('../suggestions/models/SuggestionSchema');

router.post('/add-comment/:suggestionId', (req, res) => {
    SuggestionSchema
        .findById(req.params.suggestionId)
        .then((foundSuggestion) => {
            if (!req.body.comment) {
                return res.status(400).send('No Comment Entered')
            }
            const newComment = new CommentSchema({
                comment: req.body.comment,
                owner: foundSuggestion.id
            })

            newComment.save()
                .then(() => {
                    return res.redirect(`/api/v1/suggestions/single-suggestion/${foundSuggestion.id}`)
                })
                .catch(err => res.status(400).send(`comment was not saved: ${err}`))
        })
        .catch(err => res.status(500).send(`Server Error: ${err}`))
})

module.exports = router