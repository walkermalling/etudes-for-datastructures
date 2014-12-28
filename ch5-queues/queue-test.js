'use strict';
/*jshint node:true*/
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var Queue = require(rootPath + '/ch5-queues/queue');

describe('Queue', function(){

  var queue;

  beforeEach(function(){
    queue = new Queue();
  });

  it('instantiates a Queue', function(){
    expect(queue).to.be.an.instanceOf(Queue);
  });

  it('can queue an element', function(){
    queue.enqueue('hi');
    expect(queue.dataStore[0]).to.eql('hi');
  });

  it('can dequeue an element', function(){
    queue.enqueue('hi');
    expect(queue.dataStore[0]).to.eql('hi');
    expect(queue.dequeue()).to.eql('hi');
    expect(queue.dataStore).to.eql([]);
  });

  it('can get the item at the beginning of the queue',function(){
    queue.enqueue('hi'); queue.enqueue('there');
    expect(queue.front()).to.eql('hi');
  });

  it('can get the item at the end of the queue',function(){
    queue.enqueue('hi'); queue.enqueue('there');
    expect(queue.back()).to.eql('there');
  });

  it('can report if it is empty',function(){
    queue.enqueue('hi'); queue.enqueue('there');
    expect(queue.empty()).to.eql(false);
    queue.dequeue(); queue.dequeue();
    expect(queue.empty()).to.eql(true);
  });

  it('can report its contents',function(){
    queue.enqueue('hi'); queue.enqueue('there');
    expect(queue.toString()).to.eql('hi\nthere\n');
  });


});
