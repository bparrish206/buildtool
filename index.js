'use strict';

var express = require('express');
var app = express();

require('./routes/app_routes')(app);
app.use(express.static(__dirname + '/app'));

app.set('port', process.env.PORT || 3323);
app.listen(app.get('port'), function() {
    console.log('server running on port: %d', app.get('port'));
});

module.exports = app;
