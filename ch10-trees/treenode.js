'use strict';
/*jshint node:true*/

var TreeNode = function(item, left, right){
  this.data = item;
  this.left = left;
  this.right = right;
};

TreeNode.prototype.show = function () {
  return this.data;
};

module.exports = TreeNode;
