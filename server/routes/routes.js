const express = require('express');
const router = express.Router();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
const mongoose = require('mongoose');
router.use(express.json());



mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log('CONECTED TO DB!');
    // DBdebug('CONECTED TO DB!');
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



async function getMeasurmentFromDb() {
  let measurments = await ListOfMeasurments.find({})
    .then(response=>response)
    .catch(err => console.log(err));
    console.log(measurments)
    return measurments;


};


// WORKING FOR UPDATE
//  router.get('/insert',  function (req, res) {
//   measurment1.save();
//  res.send("aaaa")
// });

 router.get('/',  function (req, res) {
  getMeasurmentFromDb();
 res.send("RADI")
});




router.post('/', async function (req, res) {
  console.log("test");
  console.log(req.body);
  const Joi = require('joi');
  const schema = Joi.object({
    weight: Joi.number().min(10).max(110).required()
  });

  if (schema.validate(req.body).error) {
    return res.status(400).send("weight walue should be between 10 and 100 kg");
  }



  res.send(req.body);
});

module.exports = router;