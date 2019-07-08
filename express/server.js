const express = require('express');
const app = express();
const router = express.Router(); // routes
const bodyParser = require('body-parser'); //library
const serverless = require('serverless-http'); //library
const mongoose = require('mongoose'); // library

const config = require('../config/index');


app.use(bodyParser.json()); // pars text to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//req request, res response, next
// access from any point to the backend(*).
// acepted methods.

const MONGO_DB_URI = process.env.MONGO_DB_URI
  ? process.env.MONGO_DB_URI
  : config.MONGO_DB_URI;

//DB connection
mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  dbName: 'test'
}).then(
  () => {
    console.log('Connected to DB correctly');
  },
  err => {
    console.log('Errror connecting to DB: ', err);
  }
);


app.use(router);
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);