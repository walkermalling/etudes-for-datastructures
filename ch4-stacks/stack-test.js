'use strict';
/*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Stack = require(rootPath + '/ch4-stacks/stack');

describe('Stack',function(){

  var stack;

  beforeEach(function(){
    stack = new Stack();
  });

  it('instantiates a Stack object',function(){
    expect(stack).to.be.an.instanceof(Stack);
  });

  it('can put an item on the stack',function(){
    stack.push('alpha');
    expect(stack.length()).to.eql(1);
    expect(stack.peek()).to.eql('alpha');
  });

  it('can take an item from the stack',function(){
    stack.push('alpha');
    expect(stack.pop()).to.eql('alpha');
    expect(stack.length()).to.eql(0);
  });

  it('can peek at the top item', function(){
    stack.push('omega');
    expect(stack.peek()).to.eql('omega');
    expect(stack.length()).to.eql(1);
  });

  it('can clear the stack',function(){
    stack.push('epsilon');
    stack.clear();
    expect(stack.length()).to.eql(0);
    expect(stack.dataStore).to.eql([]);
  });

  it('can report the length of the stack',function(){
    stack.push('alpha'); stack.push('beta');
    expect(stack.length()).to.eql(2);
  });

});
