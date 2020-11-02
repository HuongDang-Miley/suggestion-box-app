const SuggestionsSchema = require('../models/SuggestionSchema.js.js')
const suggestionSeed = require('../../../suggestions.json')

module.exports = {
    // get all suggestion
    getAllSuggestions: (req, res) => {
        // SuggestionsSchema
        //     .find()
        //     .then((suggestions) => res.status(200).json({ confirmation: 'success', suggestions }))
        //     .catch(err => res.status(500).json({ message: 'fail', err }))
        SuggestionsSchema
            .find()
            .then((foundSuggestion) => res.status(200).render('all-suggestions', { suggestionList: foundSuggestion }))
            .catch(err => res.status(400).send(`error from getAllSuggestions ${err}`))
    },

    // get a list of users that have this name:
    getSuggestionByName: (req, res) => {
        SuggestionsSchema
            .find({ name: req.params.name })
            .then((foundUsers) => {
                if (foundUser) {
                    return res.status(200).json({ confirmation: 'success', foundUsers })
                }
                return res.status(400).json({ confirmation: 'fail', message: 'no user found' })
            })
            .catch(err => res.status(500).send(err))
    },

    // Get an user by id
    getSingleSuggestion: (req, res) => {
        SuggestionsSchema
            .findById(req.params.id)
            .then((foundUser) => {
                return res.status(200).json({ confirmation: 'success', foundUser })
            })
            .catch(err => res.status(400).send('no user found'))
    },

    // create new suggestion
    createSuggestion: (req, res) => {
        // All field must be filled:
        if (!req.body.name || !req.body.title || !req.body.suggestion) {
            return res.status(400).send('Must fill your name, title and suggestion')
        }

        // Create new suggestion
        const newSuggestion = new SuggestionsSchema();
        const { title, name, suggestion, anonymous, likes } = req.body
        newSuggestion.title = title
        newSuggestion.name = name
        newSuggestion.suggestion = suggestion
        newSuggestion.anonymous = anonymous
        newSuggestion.likes = likes

        newSuggestion
            .save()
            
            // .then(newSuggestion => res.status(200).json({ confirmation: "suggestion saved", newSuggestion }))
            .then(() => res.status(200).redirect('all-suggestions'))
            .catch(err => res.status(500).json({ confirmation: 'fail', err }))
    },

    // delete suggestion
    deleteSuggestion: (req, res) => {
        SuggestionsSchema
            .findByIdAndDelete(req.params.id)
            .then((user) => res.status(200).json({ confirmation: 'deleted this user', user }))
            .catch((user) => res.status(400).send('user not found'))
    }
}