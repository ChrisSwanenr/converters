$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("#inputBinary").val();
    var inputArray = userInput.split("");
    var eightBitArray = [1,2,4,8,16,32,64,128]
    var toSumArray = [];
    inputArray.reverse();
    if (checkBinary(userInput)) {
      for(var i=0; i<inputArray.length; i++) {
        var digitNum = parseInt(inputArray[i]);
        toSumArray.push(digitNum * eightBitArray[i]);
        var result = toSumArray.reduce(function (a,b) {
          return a + b;

        })
        $("#binaryResult").text(result);
      }
      console.log(toSumArray);
    } else {
      alert("That's not a binary number. Try again.");
    }

  });

});

var checkBinary = function(number) {
  if (!(/[2-9]/.test(number))) {
    return true;
  } else {
    return false;
  }
}
