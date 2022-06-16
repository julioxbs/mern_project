const express = require('express');
const cors = require('cors');
const app = express();
const workRouter = require('./router/workRouter');
const connectDB = require('./database/db');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

app.use('/', workRouter);

app.listen(8080, () => {
    connectDB();
    console.log(`http://localhost:8080`);
})