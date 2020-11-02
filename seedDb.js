const mongoose = require('mongoose')
const suggestionSchema = require('./models/SuggestionSchema')
const suggestionSeed = require('./suggestions.json')
require('dotenv').config();

const seedFunc = async () => {
    try {
        const data = await suggestionSchema.create(suggestionSeed)
        await console.log(`${data.length} records created`)
        await mongoose.disconnect()
        console.log('MongoDB Disconnected')
    }
    catch (err) {
        console.error(err);
        process.exit(1)
    }
}

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=>{
        mongoose.connection.db.dropDatabase();
    })
    .then(() => {
        console.log('MongoDB connected');
        seedFunc();
    })
    .catch((err) => console.log(`error from seedDB.js: ${err}`))