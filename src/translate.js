//Translates 1 word into pig-latin
export function translate(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   if(word) {
//     //Check if the first character of a word is a vowel
    for(var i = 0; i < vowels.length; i++) {
      if(word[0] === vowels[i]) {
        return word + "way";
      }
    }
    if(findFirstVowel(word, vowels) === 0 || findFirstVowel(word, vowels)) {
      var firstVowelIndex = findFirstVowel(word, vowels);
      var sentenceArr = word.split("");
      var firstConsonants;
      var newSentence;
//       //If "u" is the first vowel found in the word, check if "q" precedes it
      if((word[firstVowelIndex] === "u") && (word[firstVowelIndex - 1] === "q")) {
//         firstConsonants = sentenceArr.splice(0, firstVowelIndex + 1);
//         newSentence = word.slice(firstVowelIndex + 1, word.length) + firstConsonants.join("") + "ay";
//         return newSentence;
      } else {
        //splice out the consonants before the index of the first vowel in the word
        firstConsonants = sentenceArr.splice(0, firstVowelIndex);
        newSentence = word.slice(firstVowelIndex, word.length) + firstConsonants.join("") + "ay";
        return newSentence;
      } 
    } else {
      // Check for numbers in word, if no numbers, concatenate "ay" at the end of the word
      var numArray = ["0","1","2","3","4","5","6","7","8","9"];
      for(var i = 0; i < word.length; i++) {
        if(!(numArray.includes(word[i]))) {
          return word + "ay";
        } 
      }
      
      return word.toString();
    }
//   }
  //If user doesn't input anything return "error"
  return "error";
}

//returns the index of the first vowel in a word or if no vowels, return false
function findFirstVowel(word, vowels) {
  for(var i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      return i;
    } 
  }
  return false;
}