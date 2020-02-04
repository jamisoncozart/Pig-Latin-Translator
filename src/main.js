import { translate } from "./translate.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#outputDiv").show();
    var sentence = $("#sentence").val();
    var wordArr = sentence.split(" ");
    var translatedSentence = "";
    //call translate() function on each word in the user input sentence
    for(var i = 0; i < wordArr.length; i++) {
      translatedSentence += translate(wordArr[i]) + " ";
    }
    $(".output").text(translatedSentence);
  });
});