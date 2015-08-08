'use strict';

var express = require('express');
var app = express();
var request = require('superagent');

app.use(express.static(__dirname + '/build'));

require('./routes/app_routes')(app);

app.listen(process.env.PORT || 35728);
