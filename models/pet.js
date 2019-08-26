const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
  name: String,
  type: String,
  personName: String,
  personSurname: String,
  personId: String,
});

mongoose.model('pet', petSchema, 'pets');
