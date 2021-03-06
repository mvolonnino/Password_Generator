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
    "Would you like lowercase letters in your password? (Cancel for no, OK for yes)"
  );

  var userLettersUpper = confirm(
    "Would you like UPPERCASE letters in your password? (Cancel for no, OK for yes)"
  );

  var userNumbers = confirm(
    "Would you like numbers in your password? (Cancel for no, OK for yes)"
  );

  var userSymbols = confirm(
    "Would you like special characters in your password? (Cancel for no, OK for yes)"
  );

  if (
    userLettersLower === false &&
    userLettersUpper === false &&
    userNumbers === false &&
    userSymbols === false
  ) {
    // some fun code!
    console.log(
      "*************Ah so you want to know why you have a ghost password, well read the below code and I think youll get why! Click the Generate Password button and fill out some OK's to those character sets, bring your password to 'life' !!***********"
    );
    alert(
      "You have a ghost password that will never show.... Confused? Inspect me to find out..."
    );
    // returning writePassword here to show that there was nothing entered to write password and to also not get an error while throwing that easter egg console.log in the code for fun!
    return writePassword;
  }
  // some fun code!
  console.log(
    "If your reading this that means that you answered the prompts correctly! You don't have a ghost password! Unclear to this message? Try the button again and see if you can figure it out (hint: wonder what a password would be if it had to pick from 0 characters?)"
  );

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
