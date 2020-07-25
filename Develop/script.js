// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "123456789".split("");
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

console.log(
  "This is to show the arrays made for each character selection that user will be confirmed to have in their password: ",
  lettersLower,
  lettersUpper,
  numbers,
  symbols
);

// Get users responses
function getPasswordOptions() {
  var userLengthPw = prompt(
    "How long would you like your password to be? Must be at least 8 characters long."
  );

  var userLettersLower = confirm(
    "Would you like lowercase letters in your password? (cancel for no, ok for yes)"
  );
  console.log(
    "If true, lowercase letters in your password: " + userLettersLower
  );
  var userLettersUpper = confirm(
    "Would you like UPPERCASE letters in your password? (cancel for no, ok for yes)"
  );
  console.log(
    "If true, UPPERCASE letters in the password: " + userLettersUpper
  );
  var userNumbers = confirm(
    "Would you like numbers in your password? (cancel for no, ok for yes)"
  );
  console.log("If true, numbers in password: " + userNumbers);
  var userSymbols = confirm(
    "Would you like special characters in your password? (cancel for no, ok for yes)"
  );
  console.log("If true, special characters in password: " + userSymbols);

  var passwordOptions = {
    userLengthPw: userLengthPw,
    userLettersLower: userLettersLower,
    userLettersUpper: userLettersUpper,
    userNumbers: userNumbers,
    userSymbols: userSymbols,
  };
  console.log(
    "These are the user requested password options: ",
    passwordOptions
  );
  return passwordOptions;
}

// getRandom function
function getRandom() {
  var randomPassword = getPasswordOptions();
  for (var i = 0; i < passwordOptions; i++) {
    var randomPassword =
      possiblePassword[Math.floor(Math.random() * passwordOptions.length)];
    console.log("This is the random characters: ", randomPassword);
  }
}

function generatePassword() {
  var userOptions = getPasswordOptions();
  var result = [];
  var possiblePassword = []; //stores the array types of characters to include the final password
  var gauranteedCharacters = []; //Create a new array of types of characters to include in final password

  if (userOptions.userLettersLower) {
    possiblePassword = possiblePassword.concat(lettersLower);
    gauranteedCharacters.push(getRandom(lettersLower));
    console.log(lettersLower);
  }
  if (userOptions.userLettersUpper) {
    possiblePassword = possiblePassword.concat(lettersUpper);
    gauranteedCharacters.push(getRandom(lettersUpper));
    console.log(lettersUpper);
  }
  if (userOptions.userNumbers) {
    possiblePassword = possiblePassword.concat(numbers);
    gauranteedCharacters.push(getRandom(numbers));
    console.log(numbers);
  }
  if (userOptions.userSymbols) {
    possiblePassword = possiblePassword.concat(symbols);
    gauranteedCharacters.push(getRandom(symbols));
    console.log(symbols);
  }
}

// function to be able to generate a random password based of the values inputed by the user - (pL = length of password, l = lowercase, u = uppercase, n = numbers, s = symbols
// function generatePassword() {
//   // var passAllArray = [lettersLower, lettersUpper, numbers, symbols];
//   var options = getPasswordOptions();

//   var passwordResult = [];

//   return passAllArray;

//   if (l === true) {
//     passAllArray.push(lettersLower);

//     console.log(
//       "If everything true till this point, this is the password array with lowercase letters: ",
//       passAllArray
//     );
//   }

//   if (u === true) {
//     passAllArray.push(lettersUpper);
//     console.log(
//       "If everything true till this point, This passAllArray should have lower and upper letters: ",
//       passAllArray
//     );
//   }

//   if (n === true) {
//     passAllArray.push(numbers);
//     console.log(
//       "If everything true till this point, this passAllArray should have lower, upper & numbers: ",
//       passAllArray
//     );
//   }

//   if (s === true) {
//     passAllArray.push(symbols);
//     console.log(
//       "If everything true till this point, this passAllArry should have all lower, upper, numers, & symbols arrays: ",
//       passAllArray
//     );
//   }
// }

// console.log(
//   "This is the character sets that the user has selected ",
//   passwordArray
// );

// generatePassword(
//   userLengthPw,
//   userLettersLower,
//   userLettersUpper,
//   userNumbers,
//   userSpecialChar
// );

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);
