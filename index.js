const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/hackathon');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});
