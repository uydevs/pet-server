const {
  getCompetitions,
  postCompetition,
} = require('../services/competition');

module.exports = (router) => {
  router.get('/api/competitions', (req, res) => {
    getCompetitions().then(
      (competitions) => {
        res.json(competitions);
      },
      (err) => {
        res.json(err);
      }
    )
  });


  router.post('/api/competitions', (req, res) => {
    const competition = req.body;
    postCompetition(competition).then(
      (competitions) => {
        res.json(competitions);
      },
      (err) => {
        res.json(err);
      }
      )
  });
  

}

