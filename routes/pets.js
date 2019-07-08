const {
  getPetsOfPerson,
  postPet,
  deletePet
} = require('../services/pets');


module.exports = (router) => {
  router.get('/api/pets', (req, res) => {
    getPetsOfPerson().then(
      (pets) =>{
        res.json(pets)
      },
      (err) => {
        res.json(err);
      }
    );
  });

  router.post('/api/pets', (req, res) => {
    const pet = req.body;
    postPet(pet).then(
      (pets) => {
        res.json(pets);
      },
      (err) => {
        res.json(err);
      }
    );
  });
  
  router.delete('/api/pets/:id', (req, res) => {
    const petId = req.params.id;
    deletePet(petId).then(
      (pets) => {
        res.json(pets);
      },
      (err) => {
        res.json(err)
      }
    );
  });
}

