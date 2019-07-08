const mongoose = require('mongoose');
const Pet = mongoose.model('pet');

const getPetsOfPerson = async () => {
  return await Pet.find();
}

const postPet = async (pet) => {
  const p = new Pet(pet);
  await p.save();
  return Pet.find();
}

const deletePet = async (petId) => {
  await Pet.findByIdAndDelete(petId);
  return Pet.find();
}

module.exports = {
  getPetsOfPerson,
  deletePet,
  postPet
}