const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const path = require('path')

// Template Engine 

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('Running on 3000');
});

app.use('/', homeRouter);