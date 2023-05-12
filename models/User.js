const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: String,
  age: Number,
  password : Number ,
});
 const UsernModel= mongoose.model('User',UserSchema);
 module.exports = UsernModel;
