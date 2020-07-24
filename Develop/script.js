// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "123456789".split("");
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

console.log(lettersLower, lettersUpper, numbers, specialChar);

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


// function to be able to generate a random password based of the values inputed by the user - (pL = length of password, l = lowercase, u = uppercase, n = numbers, c = special characters
function generatePassword(pL, l, u, n, c) {
  var myArray = [];

  if (pL >= 8 && pL <= 128) {
    if (l === true) {
      for (var i = 0; i < lettersLower.length; i++);{
        lettersLower = myArray
        console.log("this should show the array for lowercase letters: " + myArray);

      }


    }
  }
}

generatePassword(userLengthPw, userLettersLower, userLettersUpper, userNumbers, userSpecialChar)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
