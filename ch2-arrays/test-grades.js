 'use strict';
 /*jshint node:true*/
var expect = require('chai').expect;
var Grades = require('./grades');

describe('Grades',function(){

  var grades;

  beforeEach(function(){
    grades = new Grades();
  });

  it('stores a set of grades', function(){
    expect(grades).to.be.ok;
    expect(grades).to.have.property('scores');
    expect(grades.scores).to.be.an('array');
  });

  it('reports a list of test scores',function(){
    expect(grades.reportTests).to.be.an('function');
  })

  it('can add a grade',function(){
    grades.add(2,20);
    expect(grades.scores[2].pop()).to.eql(20);
  });

  it('can calculate a student\'s grade average',function(){
    var avg = grades.getAvg(2);
    expect(avg).to.be.an('number');
  });

  it('can display a student\'s grade average',function(){
    var avg = grades.reportAvg(2);
    expect(avg).to.eql(grades.getAvg(2).toFixed(2));
  });

  it('can clear the record of grades',function(){
    grades.reset();
    expect(grades.scores.length).to.eql(0);
  });

  it('can add grade to a blank record', function(){
    grades.reset();
    grades.add(2,20);
    expect(grades.scores[2].pop()).to.eql(20);
  });

  

});
