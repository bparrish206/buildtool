'use strict';

var expect = require('chai').expect;
var chai = require('chai');
var chaihttp = require('chai-http');
var data = require('../../app/js/client.js');

chai.use(chaihttp);

var choice = data.choice;

describe('The big Mo', function(){
  it('should be true', function(){
    expect(true).to.eql(true);
  });

  it('Data title', function(done){
    chai.request('http://localhost:3000')
    .get('/')
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res.body).to.include.keys('title');
      done();
    });

  });

  it('choice title', function(){
    expect(choice);
  });
});
