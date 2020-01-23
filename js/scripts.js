$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    $(".output").text(translate(sentence));
  });
});

function translate(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  if(sentence) {
    for(var i = 0; i < vowels.length; i++) {
      if(sentence[0] === vowels[i]) {
        console.log("in if");
        return sentence + "way";
      }
    };
    var firstVowelIndex = findFirstVowel(sentence, vowels);
    if((sentence[firstVowelIndex] === "u") && (sentence[firstVowelIndex - 1] === "q")) {
      // firstConsonants += "qu";
      var sentenceArr = sentence.split("");
      var firstConsonants = sentenceArr.splice(0, firstVowelIndex + 1);
      console.log(firstConsonants);
      var newSentence = sentence.slice(firstVowelIndex + 1, sentence.length) + firstConsonants.join("") + "ay";
      return newSentence;
    } else {
      var sentenceArr = sentence.split("");
      var firstConsonants = sentenceArr.splice(0, firstVowelIndex);
      
      console.log(firstConsonants);
      var newSentence = sentence.slice(firstVowelIndex, sentence.length) + firstConsonants.join("") + "ay";
      return newSentence;
    }
  } else {
    return "error";
  }
}

function findFirstVowel(sentence, vowels) {
  for(var i = 0; i < sentence.length; i++) {
    if(vowels.includes(sentence[i])) {
      return i;
    }
  };
}