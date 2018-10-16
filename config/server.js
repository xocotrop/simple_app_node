var express = require("express");

var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app  = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator({
    customValidators : {
        isValidDate : function isValidDate(value) {
            if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
          
            const date = new Date(value);
            if (!date.getTime()) return false;
            return date.toISOString().slice(0, 10) === value;
          }
    }
}));

consign()
    .include('app/routes')
    .then('config/dbconnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


module.exports = app;