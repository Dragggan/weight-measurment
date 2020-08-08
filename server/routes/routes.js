const express = require('express');
const router = express.Router();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
const mongoose = require('mongoose');
router.use(express.json());


let measurments = [];

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    DBdebug('CONECTED TO DB!');
  })
  .catch((err) => {
    DBdebug(`could not connect : => ${err}`);
  });


const myMeasurmentsScema = new mongoose.Schema({
  id: Number,
  weight: Number,
  date: { type: Date, default: Date.now }
});

const ListOfMeasurments = mongoose.model('listOfMeasurments', myMeasurmentsScema);
const measurment1 = new ListOfMeasurments({
  weight: 95
});


// async function addMeasurmentToTheDB() {
//   await measurment1.save();
// }
// addMeasurmentToTheDB();

async function getMeasurmentFromDb() {
  let measurments = await ListOfMeasurments.find().select({ weight: 1 })
    .then(response=>response)
    .catch(err => DBdebug(err));

  return measurments;

};




 router.get('/',  function (req, res) {
  setTimeout(() => {
    let a = getMeasurmentFromDb();
    res.send(a);
  }, 3000);

 
});


router.post('/', function (req, res) {
  const Joi = require('joi');
  const schema = Joi.object({
    weight: Joi.number().min(10).max(110).required()
  });

  if (schema.validate(req.body).error) {
    return res.status(400).send("weight walue should be between 10 and 100 kg");
  }
  res.send("OK");
});

module.exports = router;