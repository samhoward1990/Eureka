require('dotenv').config();

module.exports = {
    MongoURI: process.env.MONGOD_URI || process.env.mongopassword
}