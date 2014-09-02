'use strict';
/*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var List = require(rootPath + '/ch3-lists/list');

describe('List',function(){

  var list;

  beforeEach(function(){
   list = new List();
  });

  it('instantiates a new List', function(){
   expect(list).to.be.an.instanceof(List);
  });

  it('has all list methods', function(){
    expect(list.clear).to.be.an('function');
    expect(list.find).to.be.an('function');
    expect(list.toString).to.be.an('function');
  });

  it('has all list attributes',function(){
    expect(list.listSize).to.be.eql(0);
    expect(list.pos).to.be.eql(0);
    expect(list.dataStore).to.be.an('array');
  });

  it('can find the index of an existing element',function(){
    list.append(9);
    expect(list.find(9)).to.eql(0);
  });

  it('can determine the absence of an element',function(){
    expect(list.find(100)).to.eql(-1);
  });

  it('can remove an element',function(){
    list.append(9);
    expect(list.find(9)).to.eql(0);
    list.remove(9);
    expect(list.find(9)).to.eql(-1);
  });

  it('can return the size of the list',function(){
    list.append(10);
    list.append(20);
    list.append(30);
    expect(list.length()).to.eql(3);
  });

  it('can return a string representation of the list',function(){
    // expect(list.toString()).to.be.eql([]);
  });

  it('can insert an item',function(){
    list.append(1);
    list.append(3);
    list.insert(2,1);
    expect(list.find(2)).to.eql(1);
    expect(list.toString()).to.eql([1,2,3]);
  });

  it('can reset the list',function(){
    list.append(1);
    list.append(2);
    expect(list.length()).to.eql(2);
    list.clear();
    expect(list.toString()).to.eql([]);
  });

  it('can determine if an element exists',function(){
    list.append(1);
    expect(list.contains(1)).to.eql(true);
    expect(list.contains(9)).to.eql(false);
  });

  it('can track a position',function(){
    list.append(1);
    list.append(2);
    list.moveTo(0);
    expect(list.pos).to.eql(0);
  });

  it('can return the element at the list\'s current position',function(){
    list.append(20);
    list.append(29);
    list.append(37);
    list.moveTo(1);
    expect(list.getElement()).to.eql(29);
  });

  it('can determine if the list has a next item', function(){
    list.append(1);
    list.moveTo(0);
    expect(list.hasNext()).to.eql(false);
    //
    list.append(2);
    list.append(3);
    expect(list.hasNext()).to.eql(true);
  });

  it('can determine if the list has a previous item',function(){
    expect(list.hasPrevious()).to.eql(false);
    list.append(1);
    list.moveTo(1);
    expect(list.hasPrevious()).to.eql(true);
  });

  it('can move to the beginning of the list',function(){
    list.front();
    expect(list.pos).to.eql(0);
    list.append(1);
    list.append(2);
    list.moveTo(1);
    list.front();
    expect(list.pos).to.eql(0);
  });

  it('can move to the end of the list',function(){
    list.append(1);
    list.append(2);
    list.end();
    expect(list.pos).to.eql(1);
  });

  it('can return the current position',function(){
    list.append(1);
    list.append(2);
    list.moveTo(1);
    expect(list.currPos()).to.eql(1);
  });

});
