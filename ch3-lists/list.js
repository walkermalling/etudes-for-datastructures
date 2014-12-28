'use strict';
/*jshint node: true*/

var List = function(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
};

List.prototype.clear = function(){
  this.dataStore = [];
  this.listSize = this.pos = 0;
};

List.prototype.find = function(element){
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) return i;
  }
  return -1;
};

List.prototype.toString = function(){
  return this.dataStore;
};

List.prototype.insert = function(element, after){
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
};

List.prototype.append = function(element){
  this.dataStore[this.listSize++] = element;
};

List.prototype.remove = function(element){
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
};

List.prototype.front = function(){
  this.pos = 0;
};

List.prototype.end = function(){
  this.pos = this.listSize -1;
};

List.prototype.previous = function(){
  return this.dataStore[--this.pos];
};

List.prototype.next = function(){
  return this.dataStore[this.pos++];
};

List.prototype.hasPrevious = function(){
  if( this.pos > 0 ) return true;
  else return false;
};

List.prototype.hasNext = function(){
  if( this.pos <= this.listSize -1 ) return true;
  else return false;
};

List.prototype.length = function(){
  return this.listSize;
};

List.prototype.currPos = function(){
  return this.pos;
};

List.prototype.moveTo = function(position){
  this.pos = position;
};

List.prototype.getElement = function(){
  return this.dataStore[this.pos];
};

List.prototype.contains = function(element){
  if(this.find(element) > -1) return true;
  else return false;
};


module.exports = List;
