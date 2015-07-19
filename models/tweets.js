var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objId = Schema.ObjectId;

var tweetSchema = new Schema({
    id: objId,
    text: String,
    createByUser: String
});

module.exports = mongoose.model('Tweet', userSchema);
