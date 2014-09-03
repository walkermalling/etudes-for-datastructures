'use strict';
/*jshint node:true*/

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

/**
 * puts a new item on the stack
 *
 */
Stack.prototype.push = function(element){
  this.dataStore[this.top++] = element;
};

/**
 * takes the top item from the Stack
 * @return obj
 */
Stack.prototype.pop = function(){
  this.top--;
  return this.dataStore[this.top];
};

/**
 * looks at the top item on the Stack
 * @return obj
 */
Stack.prototype.peek = function(){
  return this.dataStore[this.top-1];
};

/**
 *
 * @return top
 */
Stack.prototype.length = function(){
  return this.top;
};

/**
 * reset Stack
 */
Stack.prototype.clear = function(){
  this.top = 0;
  this.dataStore = [];
};



module.exports = Stack;
