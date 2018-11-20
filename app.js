var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var keys = require('./config/keys');
var bodyParser = require('body-parser');

require('datejs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const serverStartDate = new Date().toString('yyyy-MM-dd hh:mm');
console.log('=================================================================================================');
console.log('Server Started ==> ' + serverStartDate + '  Mode ==> ' + keys.environment );


//########################
//#
//# Mongoose Models
//#
//########################
require('./models/Announcements');
require('./models/Configurations');
require('./models/KeyValueSets');

//########################
//#
//# Mongo Setup
//#
//########################

const mongoURI = keys.mongo.URI
    .replace('<dbuser>', keys.mongo.user)
    .replace('<dbpassword>', keys.mongo.password);

console.log('using mongo URI: ',  mongoURI);

let db = mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(
        () => {
            console.log('Connected to Mongo ==> ', mongoURI);
        } ,
        err => {
            console.warn("%%%%%%%%%%%%% Warning....Mongo Connection Issue");
            console.warn("%%%%%%%%%%%%% Start app.js");
            console.warn(err);
            console.warn('%%%%%%%%%%%%%');
        }
    );



//########################
//#
//# App Setup
//#
//########################
var app = express();

app.use(logger(keys.morganLoggerMode));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//########################
//#
//# Routes Setup
//#
//########################

app.use('/', indexRouter);
app.use('/users', usersRouter);
//require('./squawk/squawkRoutes')(app);
require('./routes/routeConfigurations')(app);
require('./routes/routeGenericDocument')(app,  '/KeyValueSetsAPI','keyValueSets');
require('./routes/routeGenericDocument')(app,  '/squawk','announcements');


module.exports = app;
