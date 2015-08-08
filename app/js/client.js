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
        var data = google.visualization.arrayToDataTable([
          ['Date'],
          ]);
        _.map(ddd, function(x) {console.log(x.date, _.map(x.estimates, function(est){console.log(est.value)}));
            data.addRows(x.date);
        });

        var options = {
          title: 'Obama Job Approval',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
$('button').click(function() {
    $('p').css('display', 'block');
  });

});
