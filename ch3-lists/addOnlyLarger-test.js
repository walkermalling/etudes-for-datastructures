'use strict';
/*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var List = require(rootPath + '/ch3-lists/addOnlyLarger');

describe('List',function(){

  var list;

  beforeEach(function(){
   list = new List();
  });

  it('won\'t add a smaller item', function(){
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(1);
    expect(list.addOnlyLarger(1)).to.eql(false);
  });

  it('will add a larger item',function(){
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(2);
    expect(list.addOnlyLarger(3)).to.eql(true);
    expect(list.toString()).to.eql([1,1,1,2,3]);
  });


});
