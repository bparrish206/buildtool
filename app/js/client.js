'use strict';

var $ = require('jquery');

$.post('/', function(data){
    $('#app').append('<h4>' + data.chart + " " + data.date + " " + data.choice + " " + data.value + '%'+ '</h4>');
    $('#main').append('<p>' + data.block+ '</p>');
  });
