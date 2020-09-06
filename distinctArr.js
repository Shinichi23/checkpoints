let arr1 = [2, 7, 5, 3, 4];
let arr2 = [3, 7, 5, 1, 9];
let totArr1 = 0;
let arr = arr1.concat(arr2);
let totArr2 = 0;

for(let i = 0; i < arr1.length; i++){
  for(let j=0; j < arr2.length; j++){
    if(arr1[i] == arr2[j]){
      totArr1 += arr1[i] + arr2[j];
    }
  }
}
  
for(let i = 0;i < arr.length; i++){
  totArr2 = totArr2 + arr[i]
}

const totArr = totArr2 - totArr1;

console.log(totArr);


