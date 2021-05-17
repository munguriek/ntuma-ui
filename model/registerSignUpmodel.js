const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const registerUpsSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true},
  // usernameField: 'email',
  // passwordField: 'password',
  phone: String,
  firstName: String,
  lastName: String,
  password: String,
});
registerUpsSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('RegistersignUp', registerUpsSchema);
