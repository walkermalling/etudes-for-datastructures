'use strict';
/*jshint node:true*/
var TreeNode = require('./treenode');

var BinarySearchTree = function(){
  this.root = null;
};

BinarySearchTree.prototype.insert = function (data) {
  var newNode = new TreeNode(data, null, null);
  if( this.root === null ) this.root = newNode;
  else {
    var current = this.root;
    var parent;
    while(true){
      parent = current;
      if(data < current.data){
        current = current.left;
        if(current === null){
          parent.left = newNode;
          break;
        }
      } else {
        current = current.right;
        if( current === null ){
          parent.right = newNode;
          break;
        }
      }
    }
  }
};

BinarySearchTree.prototype.inOrder = function (node) {
  if (node === null) return false;
  var str = "";
  str += this.inOrder(node.left) || "";
  str += (node.show() + " ");
  str += this.inOrder(node.right) || "";
  return str;
};

BinarySearchTree.prototype.preOrder = function (node) {
  if (node === null) return false;
  var str = "";
  str += (node.show() + " ");
  str += this.preOrder(node.left) || "";
  str += this.preOrder(node.right) || "";
  return str;
};

BinarySearchTree.prototype.postOrder = function (node) {
  if (node === null) return false;
  var str = "";
  str += this.preOrder(node.left) || "";
  str += this.preOrder(node.right) || "";
  str += (node.show() + " ");
  return str;
};

BinarySearchTree.prototype.getMin = function () {
  var current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
};

BinarySearchTree.prototype.getMax = function () {
  var current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
};

BinarySearchTree.prototype.find = function (val) {
  var current = this.root;
  while (current && current.data != val) {
    if (val < current.data) current = current.left;
    else current = current.right;
  }
  return current;
}

module.exports = BinarySearchTree;
