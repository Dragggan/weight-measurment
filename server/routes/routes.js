const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log("WORKS BE");
  res.send("WORKS FE");
})

module.exports = router;