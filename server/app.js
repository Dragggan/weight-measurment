require('dotenv').config();
const debug = require('debug')('debug:DEFAULT');
const DBdebug = require('debug')('debug:DB');
const express = require('express');
const cors = require('cors');
const app = express();





const myRouter = require('./routes/routes');


const port = (process.env.PORT || 3000)


app.use(cors());
app.use(myRouter);
//DO WE NEED THIS? THIS IS WHEN SUBMITING FORM
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => {
    debug(` listening on port ${port}...`)
});
