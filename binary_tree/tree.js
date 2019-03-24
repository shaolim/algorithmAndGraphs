function Tree() {
  this.root = null;
}
  
Tree.prototype.addValue = function(value) {
  var node = new Node(value);
    
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
}

Tree.prototype.search = function(val) {
  return this.root.search(val);
}

Tree.prototype.traverse = function() {
  this.root.visit();
}