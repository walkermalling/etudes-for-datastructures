'use strict';
/*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var List = require(rootPath + '/ch3-lists/person-list');
var Person = require(rootPath + '/ch3-lists/person');

describe('List',function(){

  var list;

  beforeEach(function(){
    list = new List();
    list.append(new Person('Enoch','m'));
    list.append(new Person('Eliza','f'));
    list.append(new Person('Godfrey','m'));
    list.append(new Person('Sophie','f'));
  });

  it('reports a list of males',function(){
    expect(list.reportMales()).to.eql(['Walker','Enoch','Godfrey']);
  });

  it('reports a list of females',function(){
    expect(list.reportFemales()).to.eql(['Merit','Eliza','Sophie']);
  });

});
