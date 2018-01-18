$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    var nonreducedResult = toLetters(inputNumber);
    if (nonreducedResult === false) {
      alert("Error: Only numbers less than 4000 can be converted to roman numerals. Try again.")
    }
    var reducedResult = romanReducer(nonreducedResult);
    $("#romanResult").text(reducedResult);

  });
});
var numeralValues = [1000, 500, 100, 50, 10, 5, 1];
var numeralLetters = ["M", "D", "C", "L", "X", "V", "I"];

var romanReducer = function(numeralStr) {
  var newStr = numeralStr.replace(/I{4}/, "IV");
  newStr2 = newStr.replace(/X{4}/, "XL");
  newStr3 = newStr2.replace(/C{4}/, "CD");
  return newStr3;
}

var toLetters = function(number) {
  var lettersArray = [];
  if (number >= 4000) {
    return false;
  }
  for (var i = 0; i < 7; i++) {
    while (number >= numeralValues[i]) {
        lettersArray.push(numeralLetters[i]);
        number = number - numeralValues[i];
    }
  }
  return (lettersArray.join(""));
}
