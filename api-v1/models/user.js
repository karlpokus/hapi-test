// mongoose middleware
// http://mongoosejs.com/docs/middleware.html

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: Date
});

userSchema.pre('findOneAndUpdate', function(){ // why not post?
  this.update({}, { $set: { updatedAt: new Date() } });
});

module.exports = mongoose.model('User', userSchema);
