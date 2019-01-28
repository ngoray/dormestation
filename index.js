const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const app = express();

mongoose.connect('mongodb://test1:testone1@ds233320.mlab.com:33320/dormestation', {useNewUrlParser: true});

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html')); });

app.use(function(err, req, res, next){
    res.status(422)({error: err.message});
});

app.use('/bookingAPI',require('./server/routes/bookingAPI'));


app.listen(process.env.port||4000, function(){
    console.log('now listening for request');
});