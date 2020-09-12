let arrList = [5, 1, 9, 11, 7, 10, 2, 8, 6, 3, 4];

function sortInsertion(arr){
  for(let i = 0; i < arr.length; i++){
    let j = i -1;
    let card = arr[i];
    while(j >=0 && arr[j]>card){

      arr[j+1] = arr[j]
      j--
    }
    arr[j + 1] = card
  }
  return arr
}

console.log(sortInsertion(arrList))

