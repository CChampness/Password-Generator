// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password length
function getPWLength() {
  return window.prompt("Password length 8 - 128");
}

function getTypeSelections() {
  return window.prompt("Enter ULNS");
}

function getRandom(typeSel) {
  window.prompt("in getRandom, typeSel: " + typeSel);

  if (typeSel == 'u') {
    types = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return "Q";
  } else if (typeSel == 'l') {
    types = "abcdefghijklmnopqrstuvwxyz";
    return "q";
  } else if (typeSel == 'n') {
    types = "0123456789";
    return "7";
  } else {
    types = "!#$%^&*()?{}[]";
    return "#";
  }
}

function populatePassword(pwLen, typeSel) {
  var pwBuf;
  var typePos = 0;
  var newChar;
  var pw = "";
  window.prompt("populatePassword, typeSel: " + typeSel);

  for (i = 0; i < pwLen; i++) {
    window.prompt("populatePassword, pwLen: " + pwLen);
    window.prompt("populatePassword, typePos: " + typePos);
      if (typePos >= pwLen - 1) {
      typePos = 0;
    }

    newChar = getRandom(typeSel[typePos]);
    window.prompt("populatePassword, newChar: " + newChar);
    pw = pw + newChar;
    window.prompt("populatePassword, pw:$" + pw + '$');
    typePos++;
  }
  return pw;
}

// Create a pseudo-random password with user's input
function generatePassword() {
  var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var speChars = "!#$%^&*()?{}[]";
  var pwLength = getPWLength();
  var typeSelections = getTypeSelections();
  var pw = populatePassword(pwLength, typeSelections);
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
