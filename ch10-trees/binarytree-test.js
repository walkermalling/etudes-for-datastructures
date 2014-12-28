'use strict';
var expect = require('chai').expect;
var rootPath = require('app-root-path');
var BinaryTree = require(rootPath + '/ch10-trees/binarytree');


describe('Binary Tree Search',function(){

  var bts;

  beforeEach(function(){
    bts = new BinaryTree();
  });

  it('instantiates a Binary Tree object',function(){
    expect(bts).to.be.an.instanceOf(BinaryTree);
  });

  it('can insert a new node',function(){
    bts.insert(1);
    expect(bts).to.be.ok;
  });

  it('can perform in-order traversal (starting at root)',function(){
    bts.insert(20); bts.insert(15); bts.insert(1); bts.insert(9);
    expect(bts.inOrder(bts.root)).to.eql("1 9 15 20 ");
  });

  it('can perform in-order traversal (starting at level > 0)');

  it('can perform pre-order traversal (starting at root)',function(){
    bts.insert(23); bts.insert(16); bts.insert(3); bts.insert(22);
    bts.insert(45); bts.insert(37); bts.insert(99);
    expect(bts.preOrder(bts.root)).to.eql("23 16 3 22 45 37 99 ");
  });

  it('can perform post-order traversal (starting at root)');

  it('can perform post-order traversal (starting at level > 0)');

  it('can get the max value',function(){
    bts.insert(23); bts.insert(16); bts.insert(3); bts.insert(22);
    bts.insert(45); bts.insert(37); bts.insert(99);
    expect(bts.getMax()).to.eql(99);
  });

  it('can get the min value', function(){
    bts.insert(23); bts.insert(16); bts.insert(3); bts.insert(22);
    bts.insert(45); bts.insert(37); bts.insert(99);
    expect(bts.getMin()).to.eql(3);
  });

  it('can get a particular value',function(){
    bts.insert(23); bts.insert(16); bts.insert(3); bts.insert(22);
    bts.insert(45); bts.insert(37); bts.insert(99);
    expect( bts.find(45).data ).to.eql(45);
  });


});
