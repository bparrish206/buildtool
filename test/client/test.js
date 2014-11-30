'use strict';

var expect = require('chai').expect;
var data = require('../../app/js/client.js');

var title = data.chart;
var choice = data.choice;

describe('The big Mo', function(){
  it('should be true', function(){
    expect(true).to.eql(true);
  });

  it('Data title', function(){
    expect(title);
  });

  it('choice title', function(){
    expect(choice);
  });
});
