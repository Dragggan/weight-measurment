require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const myRouter = require('./routes/routes');


const port = (process.env.PORT || 3000)

app.use(cors());
app.use(myRouter);


app.listen(port, () => {
    console.log(` listening on port ${port}...`);
});
