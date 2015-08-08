'use strict';

var $ = require('jquery');

$.post('/', function(data) {
  $('#app').append('<h4>' + data.chart + ' ' + data.date + ' ' + data.choice + ' ' + data.value + '%' + '</h4>');
  $('#main').append('<p>' + data.test3 + '</p>');
  //var chrData = _.pick(data.block, 'data', 'estimates');

  //console.log(chrData);
  $('button').click(function() {
    $('p').css('display', 'block');
  });
});
