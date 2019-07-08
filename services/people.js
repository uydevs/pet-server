const mongoose = require('mongoose');
const Person = mongoose.model('person'); //mongoose model name defined in declaration of model

const  getPersons = () => {
  return Person.find(); //if i give nothing, this method returns all of them.
}


module.exports = {
  getPersons,
}