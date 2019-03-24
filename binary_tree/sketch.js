var tree;
function setup() {
  // put setup code here
  noCanvas();
  tree = new Tree();
  for(let i = 0; i<10; i++) {
    tree.addValue(floor(random(1,100)));
  }
  tree.traverse();
  console.log(tree);
}

