function Tree() {
  this.root = null;
}
  
Tree.prototype.addValue = function(value) {
  var node = new Node(value);
    
  if (this.root == null) {
    this.root = node;
    this.root.x = width/2;
    this.root.y = 16;
  } else {
    this.root.addNode(node);
  }
}

Tree.prototype.search = function(val) {
  return this.root.search(val);
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}