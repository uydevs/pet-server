const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
  name: String,
  surname: String,
});

mongoose.model('person', personSchema, 'people');
