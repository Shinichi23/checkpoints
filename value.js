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
        if(sentence == ' '){
            nSpace++ 
        }
    } while (sentence!==".")

    

console.log("Number of characters : ", nChar)
console.log("Number of words : ", nSpace)
console.log("Number of vowels : ", nVowels)