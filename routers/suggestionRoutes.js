const express = require('express')
const router = express.Router()
// const SuggestionsSchema = require('../models/SuggestionSchema.js')
const {
    getAllSuggestions,
    getSuggestionByName,
    getSingleSuggestion, 
    createSuggestion,
    deleteSuggestion} = require('../controllers/suggestionControllers.js')

// get all suggestion
router.get('/all-suggestions', getAllSuggestions)

// get a list of users that have this name:
router.get('/byname-suggestion/:name', getSuggestionByName)

// Get an user by id
router.get('/single-suggestion/:id', getSingleSuggestion)

// create new suggestion
router.post('/create-suggestion', createSuggestion)

// delete suggestion
router.delete('/delete-suggestion/:id', deleteSuggestion) 

module.exports = router
