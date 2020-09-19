// 3- Function that gives the number of leaves in the tree

function Tree(value){
    this.value = value;
    this.children = [];
}

Tree.prototype.countLeaves = function (){
    let leaves = 0;
    if(!this.children.length){
        return 1
    };
    function countLeaves(node){
        if(!node.children.length){
            leaves++
        }
        for(let i = 0; i <node.children.length; i++){
            let child = node.children[i];
            countLeaves(child);
        }
    };
    countLeaves(this);
    return leaves;
}

