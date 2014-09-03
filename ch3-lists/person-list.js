'use strict';
/*jshint node:true*/
var List = require('./list');

List.prototype.reportMales = function(){
  return this.reportGender('m');
};

List.prototype.reportFemales = function(){
  return this.reportGender('f');
};

List.prototype.reportGender = function(gender){
  var report = [];

  for(this.front(); this.hasNext();){
    var p = this.getElement();
    if( p.gender === gender ) report.push(p.name);
    this.next();
  }
  
  return report;
};


module.exports = List;
