require('dotenv').config();
const DBdebug = require('debug')('debug:DB');
const express = require('express');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


const myRouter = require('./routes/routes');


const port = (process.env.PORT || 3000)



app.use(myRouter);
//DO WE NEED THIS? THIS IS WHEN SUBMITING FORM
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => {
  DBdebug(` listening on port ${port}...`)
});
