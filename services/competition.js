const mongoose = require('mongoose');
const Competition = mongoose.model('competition');

const getCompetitions = () => {
  return Competition.find()
}

const postCompetition = async (competition) => {
  const comp = new Competition(competition);
  await comp.save();
  return Competition.find();
}


module.exports = {
  getCompetitions,
  postCompetition,
}