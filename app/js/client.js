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
            data.addColumn('string', 'Date');
            //data.addColumn('number', 'Disapprove');
            data.addColumn('number', 'Approve');
            //data.addColumn('number', 'Undecided');

        _.map(ddd, function(x){ var row = [];
          var date = x.date.split('-').join(',');
          _.map(x.estimates, function(est){
            row.push(est.value)})
          console.log(date, row[1]);
            data.addRows([[date, row[1]]]);
            //if  (row[1] != 0 || row[1] != null){
            //data.addRows([row[1]]);
            //console.log(row[1]);
          //} else {
            //console.log(row);
          //}

            //if (row.length == 2){
              //data.addRows([row]);
           // } else if (row.length >2){
             // row.pop();
              //data.addRows([row]);
            //} else {
              //row.push(0);
            //data.addRows([row]);
          //};

        });

        var options = {
          title: 'Obama Job Approval',
          hAxis: {title: 'Job Approval', minValue: 0.0,  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0.0}
        };

         var options_fullStacked = {
          isStacked: 'relative',
          height: 300,
          legend: {position: 'top', maxLines: 1},
          hAxis: {title: 'Job Approval', minValue: 0.0,  titleTextStyle: {color: '#333'}},
          vAxis: {
            minValue: 0,
            ticks: [0, 25, 50, 75, 100]
          }
        };


        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
$('button').click(function() {
    $('p').css('display', 'block');
  });

});
