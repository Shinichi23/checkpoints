const palindrome = str => {
    str = str.toLowerCase();
    if (str.length === 0 || str.lentgh === 1) {
      return true
    } 
  
    if(str[0] !== str[str.length -1 ]){
      return false
    }
    return palindrome(str.substr(1, str.length -2))
  }
  
      console.log(palindrome('hello'));
      console.log(palindrome('')); //empty word
      console.log(palindrome('T')) //single character
      console.log(palindrome('KayAk')); 
      console.log(palindrome('bob'))
      console.log(palindrome('kayaketkayak'))