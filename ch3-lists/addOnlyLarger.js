'use strict';
/*jshint node:true*/
var List = require('./list');

List.prototype.addOnlyLarger = function(item){
  for(this.front(); this.hasNext();){
    if(item <= this.getElement()) return false;
    this.next();
  }

  this.append(item);
  return true;
};

module.exports = List;
