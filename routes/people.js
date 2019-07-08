const {
  getPersons, 
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
}

