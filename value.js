let sentence;
let nChar = 0;
let nVowels = 0;
let nSpace = 0;
let vowels = ['a', 'e', 'o', 'u', 'i']
    
    do{
            sentence = prompt();
            nChar++
        if(vowels.indexOf(sentence) !== -1){
            nVowels++
        } 
        if(sentence === ' '){
           nSpace = nSpace + 1;
        }
    } while (sentence!==".")

    
console.log("Number of characters : ", nChar)
console.log("Number of words : ", nSpace + 1)
console.log("Number of vowels : ", nVowels)
