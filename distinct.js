let arr1 = [2, 7, 5];
let arr2 = [3, 7, 5];
let arrT = [];
let newArr = arrT.concat(arr1, arr2);

function duplicate(arr) {
  const duplicates = arr.filter(function(elm){
    return arr.indexOf(elm) !== arr.lastIndexOf(elm)
  });
  return duplicates.reduce((a, b) => a + b);
}

console.log(duplicate(newArr))
console.log()