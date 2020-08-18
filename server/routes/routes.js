const express = require('express');
const router = express.Router();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
const mongoose = require('mongoose');
router.use(express.json());
const cors = require('cors');

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




async function getMeasurmentFromDb() {
  let measurments = await ListOfMeasurments.find({})
    .then(response => response)
    .catch(err => console.log(err));
  return measurments;
};





router.get('/', cors(), async function (req, res) {
  let measurments = await ListOfMeasurments.find({})
    .then(response => response)
    .catch(err => console.log(err));
  console.log("=================");
  res.status(200).send(measurments);

});



// POST REQUEST
router.post('/allweights', async function (req, res) {
  const Joi = require('joi');
  const schema = Joi.object({
    weight: Joi.number().min(10).max(110).required()
  });

  if (schema.validate(req.body).error) {
    return res.status(400).send("weight walue should be between 10 and 100 kg");
  }
  else {
    insertWeightDocumentintoDb(req.body);
    res.send(`INSERTED IN DB DOCUMENT WITH WEIGHT: ${JSON.stringify(req.body.weight)}`);
  }
});

async function insertWeightDocumentintoDb(data) {
  const measurment = new ListOfMeasurments({
    weight: data.weight
  });
  await measurment.save();
};

module.exports = router;