let hash1 = {
    '8': 0,
    '3': 1,
    '4': 2,
    '2': 3,
    '5': 4,
  };
  
  let set2 = [8, 7, 9, 5, 3]
  
  let totHash = 0;
  
  for(let i = 0; i < set2.length ; i++){
    
    if(hash1[set2[i].toString()] !== undefined){
      console.log(set2[i])
      totHash += set2[i]
    };
    
  }
  totHash = totHash*2;
  
  console.log(totHash)