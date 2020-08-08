const express = require('express');
const router = express.Router();
router.use(express.json());


router.get('/', function (req, res) {
  console.log("WORKS BE");
  res.send("WORKS FE");
})


router.post('/', function (req, res) {
  console.log(req.body.weight);
  res.send("aaaaaaaaaaaaaaaaaaaa");
})

module.exports = router;