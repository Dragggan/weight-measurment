const express = require('express');
const router = express.Router();
router.use(express.json());
const Joi = require('joi');
const DBData = require('../crudOperations/DBdata');


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


router.delete('/:id', async function (req, res) {
 await DBData.deleteUserWeightDataFromDb(req.params.id);
  res.status(200).send("OK");
});

module.exports = router;