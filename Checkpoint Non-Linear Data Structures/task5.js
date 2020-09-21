// 5- Function to test if the tree is a full binary tree

function fullBinaryTree(root){
    if(root != null){
      if(root.leftChild == null && root.rightChild == null){
        return true 
      } else if (root.leftChild != null && root.rightChild != null){
        return fullBinaryTree(root.leftChild) && fullBinaryTree(root.rightChild);
      } else return false
    } 
  }
  