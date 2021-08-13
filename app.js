const express = require('express');
const logger = require('morgan');
const primenessRouter = require('./routes/primeness.route');
const port = process.env.NODE_HOST_PORT || 5000;
const cors = require("cors");

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/primeness', primenessRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app;
