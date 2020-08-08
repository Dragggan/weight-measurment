const express = require('express');
const router = express.Router();

router.use(express.json());



router.get('/', function (req, res) {
  console.log("WORKS BE");
  res.send("WORKS FE");
});


router.post('/', function (req, res) {
  const Joi = require('joi');
  const schema = Joi.object({
     weight: Joi.number().min(10).max(110).required()
  });

  if (schema.validate(req.body).error) {
    return res.status(400).send("weight walue should be between 10 and 100 kg")
  }
  res.send("OK");
});

module.exports = router;