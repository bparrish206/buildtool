'use strict';

var express = require('express');
var app = express();
var request = require('superagent');

app.use(express.static(__dirname + '/build'));

app.post('/', function(req, res){
  var purl = 'http://elections.huffingtonpost.com/pollster/api/charts/obama-job-approval';
  request
  .get(purl)
  .end(function (err, purlData){
    if(err) throw err;
    var title = purlData.body.title;
    var est = purlData.body.estimates;
    var choice = est[1].choice;
    var value = est[1].value;
    var date = purlData.body.last_updated;
    var block = JSON.stringify(purlData.body);
    block = block.replace(/[{}]/g,'');
    block = block.replace(/[""]/g,'');
    block = block.replace(/[:]/g, ': ');
    block = block.replace(/[,]/g, ', ');
    var rdate = date.slice(0,10);
    res.json({chart: title, date: rdate, choice: choice, value: value, block: block});
  });
});

//require('./routes/app_routes')(app);

app.listen(3000);
