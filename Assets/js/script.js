// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password length
function getPWLength() {
  var pwLen = 0;
  while (pwLen < 8 || pwLen > 128) {
    pwLen = window.prompt("Enter desired password length (8 - 128)");
  }
  return pwLen;
}

function getTypeSelections() {
  print("<input type='checkbox' id='myId' checked="${value}" />");
  return window.prompt("Enter ULNS");
}

function getRandom(typeSel) {
  var types = "";

  if (typeSel == 'u') {
    types = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (typeSel == 'l') {
    types = "abcdefghijklmnopqrstuvwxyz";
  } else if (typeSel == 'n') {
    types = "0123456789";
  } else {
    types = "!#$%^&*()?{}[]";
  }

   var ranChar = types[Math.floor(Math.random() * types.length)];
   return ranChar;
}

function populatePassword(pwLen, typeSel) {
  var pwBuf;
  var typePos = 0;
  var newChar;
  var pw = "";

  for (i = 0; i < pwLen; i++) {
      if (typePos >= typeSel.length) {
      typePos = 0;
    }

      typeSel + "typePos:" + typePos);
    newChar = getRandom(typeSel[typePos]);
    console.log("populatePassword, newChar: " + newChar);
    pw = pw + newChar;
    console.log("populatePassword, pw:$" + pw + '$');
    typePos++;
  }
  return pw;
}

// Create a pseudo-random password with user's input
function generatePassword() {
  var pwLength = getPWLength();
  var typeSelections = getTypeSelections();
  var pw = populatePassword(pwLength, typeSelections);
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Here is your randomly generated secure password:\n" + 
    password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
