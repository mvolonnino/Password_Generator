// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "123456789".split("");
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

console.log(lettersLower, lettersUpper, numbers, symbols);

// Get users responses

var userLengthPw = prompt(
  "How long would you like your password to be? Must be at least 8 characters long."
);
console.log("this is how long the password will be: " + userLengthPw);
var userLettersLower = confirm(
  "Would you like lowercase letters in your password? (cancel for no, ok for yes)"
);
console.log("If true, lowercase letters in your password: " + userLettersLower);
var userLettersUpper = confirm(
  "Would you like UPPERCASE letters in your password? (cancel for no, ok for yes)"
);
console.log("If true, UPPERCASE letters in the password: " + userLettersUpper);
var userNumbers = confirm(
  "Would you like numbers in your password? (cancel for no, ok for yes)"
);
console.log("If true, numbers in password: " + userNumbers);
var userSpecialChar = confirm(
  "Would you like special characters in your password? (cancel for no, ok for yes)"
);
console.log("If true, special characters in password: " + userSpecialChar);

// function to be able to generate a random password based of the values inputed by the user - (pL = length of password, l = lowercase, u = uppercase, n = numbers, s = symbols
function generatePassword(pL, l, u, n, s) {
  // var passAllArray = [lettersLower, lettersUpper, numbers, symbols];
  var passAllArray = [];
  // var passwordArray = [];
  if (pL >= 8 && pL <= 128) {
    console.log("this is the passAllArray with all options: ", passAllArray);
  }

  if (l === true) {
    passAllArray.push(lettersLower);

    console.log(
      "If everything true till this point, this is the password array with lowercase letters: ",
      passAllArray
    );
  }

  if (u === true) {
    passAllArray.push(lettersUpper);
    console.log(
      "If everything true till this point, This passAllArray should have lower and upper letters: ",
      passAllArray
    );
  }

  if (n === true) {
    passAllArray.push(numbers);
    console.log(
      "If everything true till this point, this passAllArray should have lower, upper & numbers: ",
      passAllArray
    );
  }

  if (s === true) {
    passAllArray.push(symbols);
    console.log(
      "If everything true till this point, this passAllArry should have all lower, upper, numers, & symbols arrays: ",
      passAllArray
    );
  }
}



generatePassword(
  userLengthPw,
  userLettersLower,
  userLettersUpper,
  userNumbers,
  userSpecialChar
);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
