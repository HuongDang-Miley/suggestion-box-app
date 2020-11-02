const router = require('express').Router()
// const router = express.Router()
const commentSchema = require('../comments/models/CommentSchema');
const suggestionSchema = require('./models/SuggestionSchema')
const {
    getAllSuggestions,
    getSuggestionByName,
    getSingleSuggestion, 
    createSuggestion,
    deleteSuggestion} = require('./suggestionControllers.js')

// get all suggestion
router.get('/all-suggestions', getAllSuggestions)

// get a list of suggestion that have this name:
router.get('/byname-suggestion/:name', getSuggestionByName)

// Get an suggestion by id and show the view of a single suggestion base on id
router.get('/single-suggestion/:id', getSingleSuggestion)

// create new suggestion
router.post('/create-suggestion', createSuggestion)


// delete suggestion
router.delete('/delete-suggestion/:id', deleteSuggestion) 

// // Get view of comment
// router.get('/add-comment/:suggestionId', (req, res) => {
//     suggestionSchema.findById(req.params.wordId)
//       .then((foundSuggestion) => {
//         if (foundSuggestion) {
//             commentSchema.find({owner: foundSuggestion.id})
//           .then((dbComments)=> {
//             return res.render('all-suggestions', {foundComments: dbComments });
//           })
//         } else {
//           return res.status(400).send('No Word Found');
//         }
//       })
//       .catch((err) => {
//         return res
//           .status(500)
//           .json({ confirmation: 'fail', message: 'Server Error', err });
//       });
//   });

module.exports = router
