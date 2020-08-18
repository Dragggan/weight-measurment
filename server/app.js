require('dotenv').config();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
const express = require('express');

const app = express();





const myRouter = require('./routes/routes');


const port = (process.env.PORT || 3000)



app.use(myRouter);
//DO WE NEED THIS? THIS IS WHEN SUBMITING FORM
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => {
    console.log(` listening on port ${port}...`)
});
