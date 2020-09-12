function palindrome(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
      if(str[i] !== str[str.length -1 - i]){
          return `${str} is not a palindrom word`;
      }
    }
    return `${str} is a palindrom word`;
    }
    
    console.log(palindrome('hello'));
    console.log(palindrome('')); //empty word
    console.log(palindrome('T')) //single character
    console.log(palindrome('kayak')) ;