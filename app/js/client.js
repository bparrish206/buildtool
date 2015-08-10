'use strict';

var $ = require('jquery');
var _ = require('underscore');

google.load("visualization", "1", {packages:["corechart"]});

$.post('/', function(data) {
  $('#app').append('<h4>' + data.chart + ' ' + data.date + ' ' + data.choice + ' ' + data.value + '%' + '</h4>');
  $('#main').append('<p>' + data.test + '</p>');
  var ddd = data.test2;
  //console.log(ddd);
  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
            data.addColumn('number', 'Disapprove');
            data.addColumn('number', 'Approve');
            data.addColumn('number', 'Undecided');

        _.map(ddd, function(x){ _.map(x.estimates, function(est){data.addRows(est.value)}) //{var date = x.date.split('-').join(',')
          console.log(ddd);
        });

        var options = {
          title: 'Obama Job Approval',
          hAxis: {title: 'Year', minValue: 0.0,  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0.0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
$('button').click(function() {
    $('p').css('display', 'block');
  });

});
