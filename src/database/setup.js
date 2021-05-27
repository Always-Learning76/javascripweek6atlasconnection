//Setup mongoose
const mongoose = require('mongoose')

const url = `mongodb+srv://new-user-4:reskill#4@sandbox.kavg9.mongodb.net/homes?retryWrites=true&w=majority`;
const connectionString = 'mongodb://localhost:27017/Homebuying'

module.exports = function () {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:  false
    }, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('database connection successful')
        }
    });
}


