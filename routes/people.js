const {
  getPersons,
  postPerson,
  deletePerson, 
} = require('../services/people');

module.exports = (router) => {
  router.get('/api/people', (req, res) => {
    getPersons().then(
      (people) => {
        res.json(people);
      },
      (err) => {
        res.json(err);
      }
    )
  });
  
  router.post('/api/people', (req, res) => {
    const person = req.body
    postPerson(person).then(
      (persons) => {
        res.json(persons)
      },
      (err) => {
        res,json(err);
      }
    )
  });

  router.delete('/api/people/:id', (req, res) => {
    const personId = req.params.id;
    deletePerson(personId).then(
      (persons) => {
        res.json(persons);
      },
      (err) => {
        res.json(error);
      }
    )
  });
}

