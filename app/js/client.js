'use strict';

var $ = require('jquery');
var _ = require('underscore');

google.load("visualization", "1", {packages:["corechart"]});

$.post('/', function(data) {
  $('#app').append('<h4>' + data.chart + ' ' + data.date + ' ' + data.choice + ' ' + data.value + '%' + '</h4>');

  var bulkD = _.map(data.test2, function(elm){return  elm.date +", " + _.map(elm.estimates, function(est){return _.values(est)})});

  $('#main').append('<p>' + bulkD + '</p>');
  var ddd = data.test2.reverse();
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
            data.addColumn('string', 'Date');
            data.addColumn('number', 'Approve');
            data.addColumn('number', 'Disapprove');
            data.addColumn('number', 'Undecided');

        _.map(ddd, function(x){ var row = [];
          var date = x.date.split('-').join(',');
          _.map(x.estimates, function(est){
            row.push(est.value)})
          console.log(date, row);
            if  (row.length == 3){
            data.addRows([[date, row[1], row[0], row[2]]]);
          } else {
            console.log(row);
          }
        });

        var options = {
          isStacked: 'relative',
          legend: {position: 'top', maxLines: 1},
          title: 'Obama Job Approval',
          hAxis: {title: 'Date', minValue: 0.0,  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0.0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

$('button').click(function() {
    $('p').css('display', 'block');
  });

});
