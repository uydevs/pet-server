const mongoose = require('mongoose');
const {Schema} = mongoose;

const petSchema = new Schema({
  name: String,
  type: String,
  personName: String,
  personSurname: String
});

mongoose.model('pet', petSchema, 'pets');