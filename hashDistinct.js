let hash1 = {
    '8': 0,
    '3': 1,
    '4': 2,
    '2': 3,
    '5': 4,
  };
  
  let set2 = [8, 7, 9, 5, 3]
  
  let totHash1 = 0;
  
  for(let i = 0; i < set2.length ; i++){
    
    if(!(hash1[set2[i].toString()] !== undefined)){
      totHash1 += set2[i]
    };
    
  }
    
  let hash2 = {
    '8': 0,
    '7': 1,
    '9': 2,
    '5': 3,
    '3': 4,
  };
  let set1 = [8, 3, 4, 2, 5]
  
  let totHash2 = 0;
  
  for(let i = 0; i < set1.length ; i++){
    
    if(!(hash2[set1[i].toString()] !== undefined)){
      totHash2 += set1[i]
    };
  }
  
  const totHash = totHash1 + totHash2
  console.log(totHash)