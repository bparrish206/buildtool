'use strict';

var expect = require('chai').expect;
var dateutils = require('../../public/js/dateutils');
var undV = require('../../public/js/logunderscore');

var date = dateutils.logDate();
var month = dateutils.logMonth();
var v = undV();

describe('some test', function(){
  it('should be true', function(){
    expect(true).to.eql(true);
  });

  it('underscore should be present', function(){
    expect(v).to.eql('1.7.0');
  });

  it('should test month', function(){
    expect(month).to.eql(10);
  });

  it('should test date', function(){
    expect(date).to.eql(28);
  });

});
