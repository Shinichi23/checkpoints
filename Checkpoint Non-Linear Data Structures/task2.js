// 2- Function that gives the height of a tree 

function height(node){
    if(!node) return 0;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }