const mongoose = require('mongoose');
const Pet = mongoose.model('pet');

const getPetsOfPerson = async personId => {
  return await Pet.find({ personId: personId });
};

const postPet = async pet => {
  const p = new Pet(pet);
  await p.save();
  return Pet.find();
};

const deletePet = async petId => {
  await Pet.findByIdAndDelete(petId);
  return Pet.find();
};

module.exports = {
  getPetsOfPerson,
  deletePet,
  postPet,
};
