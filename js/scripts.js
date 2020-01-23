$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    $(".output").text(translate(sentence));
  });
});

function translate(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  for(var i = 0; i < vowels.length; i++) {
    if(sentence[0] === vowels[i]) {
      console.log("in if");
      return sentence + "way";
    } 
  }; 
  return "error";
}