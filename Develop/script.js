// Assignment Code -
var generateBtn = document.querySelector("#generate");
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "123456789".split("");
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

console.log(
  "This is all the character sets in taken from a string and made into an array using the .split(): ",
  lettersLower,
  lettersUpper,
  numbers,
  symbols
);

// // Get users responses
function getPasswordOptions() {
  var userLengthPw = prompt(
    "How long would you like your password to be? Must between 8 and 128 characters long."
  );

  while (userLengthPw < 8 || userLengthPw > 128 || userLengthPw === null) {
    userLengthPw = prompt(
      "Do you know how to read? I said between 8 and 128 you fool!"
    );
  } 

  var userLettersLower = confirm(
      "Would you like lowercase letters in your password? (cancel for no, ok for yes)"
    );

  var userLettersUpper = confirm(
      "Would you like UPPERCASE letters in your password? (cancel for no, ok for yes)"
    );

  var userNumbers = confirm(
      "Would you like numbers in your password? (cancel for no, ok for yes)"
    );

  var userSymbols = confirm("Would you like special characters in your password? (cancel for no, ok for yes)"
    );
  }

  var passwordOptions = {
    userLengthPw: userLengthPw,
    userLettersLower: userLettersLower,
    userLettersUpper: userLettersUpper,
    userNumbers: userNumbers,
    userSymbols: userSymbols,
  };

  console.log(
    "Object that stores user responses for password: ",
    passwordOptions
  );

  return passwordOptions;
}

function generatePassword() {
  var userOptions = getPasswordOptions(); //taking passwordOptions as an object that has the user inputs stored

  var possiblePassword = []; //stores the array types of characters to include the final password

  //these ifs take the object userOptions key values, if they are TRUE then it will merge the arrays into the possiblePassword[]
  if (userOptions.userLettersLower) {
    possiblePassword = possiblePassword.concat(lettersLower);
  }
  if (userOptions.userLettersUpper) {
    possiblePassword = possiblePassword.concat(lettersUpper);
  }
  if (userOptions.userNumbers) {
    possiblePassword = possiblePassword.concat(numbers);
  }
  if (userOptions.userSymbols) {
    possiblePassword = possiblePassword.concat(symbols);
  }
  console.log(
    "This will be an array of all the possible characters in the password: ",
    possiblePassword
  );
  return getRandom(userOptions.userLengthPw, possiblePassword);
}

// getRandom function
function getRandom(userLength, possiblePassword) {
  var strPossiblePassword = possiblePassword.join("");
  console.log("String for the possiblePassword[] ", strPossiblePassword);
  var randomPassword = "";
  for (var i = 0; i < userLength; i++) {
    randomPassword += strPossiblePassword.charAt(
      Math.floor(Math.random() * strPossiblePassword.length)
    );
  }
  console.log("The length for the possiblePassword: ", randomPassword.length);
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
