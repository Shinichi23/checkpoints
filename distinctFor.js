let arr1 = [2, 7, 5, 3, 4];
let arr2 = [3, 7, 5, 1, 9];
let totArr = 0;

  
for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
      totArr += arr1[i] + arr2[j];
    }
  }
}

console.log(totArr)


