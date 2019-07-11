const mongoose = require('mongoose');
const {Schema} = mongoose;

const competitionSchema = new Schema({
  title: String,
  date: Date,
  pets: Array,
})

mongoose.model('competition', competitionSchema, 'competitions')