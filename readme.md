SUGGESTION BOX APP


Make a directory called suggestion-box

Use Postman and Robo 3T to test your routes
Use Mongoose to create db

INSTRUCTIONS:
Create an express server.

Server port should be stored in .env file

Use morgan for logging information

DB:
db address should be stored in .env

Model:
Build a schema for Suggestions called SuggestionSchema

SuggestionSchema fields:
title - should be a string, lowercase, unique, required
name - should be a string, lowercase and required
suggestion - should be a string, lowercase and required
likes - should be a number and default to 0
anonymous - should be a boolean
timeCreated - should be a date

Routes:
GET /all-suggestions
GET /byname-suggestion
GET /single-suggestion
POST /create-suggestion
UPDATE /update-suggestion
DELETE /delete-suggestion


Controller Functions:
* getAllSuggestions
* getSuggestionsByName- if i query a name i should get a list of their suggestions
* getSingleSuggestion - get one suggestion based on id using parameters
* createSuggestion
* updateSuggestion user can only update title and suggestion
* deleteSuggestion - suggestion deletes based on id


Use controllers for business logic.
All returned promises should have a .catch for errors

Parent Route should be :  /api/v1/suggestions 


Submit Github Link