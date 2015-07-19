 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var objId = Schema.ObjectId;

 var userSchema = new Schema({
     id: objId,
     first: String,
     last: String,
     email: {type: String, unique: true},
     pass: String,
     following: [objId],
     followers: [objId],
     followers_count: Number,
     following_count: Number
 });

module.exports = mongoose.model('User', userSchema);
