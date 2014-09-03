'use strict';
/*jshint node:true*/

var Queue = function(){
  this.dataStore = [];
};

Queue.prototype.enqueue = function(element){
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function(){
  return this.dataStore.shift();
};

Queue.prototype.front = function(){
  return this.dataStore[0];
};

Queue.prototype.back = function(){
  return this.dataStore[this.dataStore.length -1];
};

Queue.prototype.toString = function(){
  var str = "";
  for(var k = 0; k < this.dataStore.length; k++){
    str += this.dataStore[k] + "\n";
  }
  return str;
};

Queue.prototype.empty = function(){
  if(this.dataStore.length === 0) return true;
  else return false;
};

module.exports = Queue;
