const mongoose = require('mongoose');
const Person = mongoose.model('person'); //mongoose model name defined in declaration of model

const  getPersons = () => {
  return Person.find(); //if i give nothing, this method returns all of them.
}

const postPerson = async (person) => {
  const p = new Person(person);
  await p.save();
  return Person.find();
}

const deletePerson = async (personId) => {
  await Person.findByIdAndDelete(personId);
  return Person.find();
}


module.exports = {
  getPersons,
  postPerson,
  deletePerson,
}