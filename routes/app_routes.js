'use strict';

var request = require('superagent');
var _ = require("underscore");

module.exports = function(app){
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
      var test = _.pick(purlData.body, 'estimates_by_date');
      var test1 = _.values(test);
      var test2 = test1[0];
      var test3 = _.map(test2, function(elm){return elm.date +" " + _.map(elm.estimates, function(est){return _.values(est)})});
      console.log(test3);
      block = block.replace(/[{}]/g,'');
      block = block.replace(/[""]/g,'');
      block = block.replace(/[:]/g, ': ');
      block = block.replace(/[,]/g, ', ');
      var rdate = date.slice(0,10);
    res.json({chart: title, date: rdate, choice: choice, value: value, test: test});
  });
});
};
