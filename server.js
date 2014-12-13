'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/build'));

require('./routes/app_routes')(app);

app.listen(3000);
