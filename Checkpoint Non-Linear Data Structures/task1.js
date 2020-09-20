// 1- Function that gives the number of nodes in the tree.

function numberNodes(root){
    if(root === null){
      return 0
    } else {
      return numberNodes(root.leftChild) + numberNodes(root.rightChild) + 1
    }
  }