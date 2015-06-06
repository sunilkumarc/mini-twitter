 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var objId = Schema.ObjectId;

 var userSchema = new Schema({
     id: objId,
     first: String,
     last: String,
     email: {type: String, unique: true},
     pass: String
 });

module.exports = mongoose.model('User', userSchema);
