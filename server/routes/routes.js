const express = require('express');
const router = express.Router();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
router.use(express.json());
const Joi = require('joi');
const DBData = require('../crudOperations/DBData');


//GET ALL WEIGHT DATA FROM DB 
router.get('/', async function (req, res) {
  DBData.getMeasurmentFromDb(res);
});


const schema = Joi.object({
  weight: Joi.number().min(10).max(110).required()
});


// POST REQUEST
router.post('/', async function (req, res) {
  if (schema.validate(req.body).error) {
    return res.status(400).send("weight walue should be between 10 and 100 kg");
  }
  else {
    DBData.insertWeightDocumentintoDb(req.body);
    res.send({ "weight": req.body.weight });
  }
});


router.delete('/', async function (req, res) {
  const measurments = await DBData.deleteUserWeightDataFromDb(req.body);
  // console.log(measurments);
  // if (measurments === undefined) {
  //   res.send("not found ID");
  // }
  res.status(200).send(`DELETED ID= ${JSON.stringify(req.body._id)}`);

});

module.exports = router;