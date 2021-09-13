// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password length
function getPWLength() {
  var pwLen = 0;
  var pwTxt = document.querySelector("#password");
  pwTxt.value = "";
  while (pwLen < 8 || pwLen > 128) {
    pwLen = window.prompt("Enter desired password length (8 - 128)");
  }
  return pwLen;
}

function getTypeSelections() {
  // return window.prompt("Enter ULNS");
  /* Could use confirms for all 4 types */
  var typeList = "";
  if (confirm("Upper case?")) {
    typeList += "u";
  }

  if (confirm("Lower case?")) {
    typeList += "l";
  }

  if (confirm("Special characters?")) {
    typeList += "s";
  }

  if (confirm("Numbers?")) {
    typeList += "n";
  }
  
  return typeList;
}

function getRandom(charList) {
   var ranChar = charList[Math.floor(Math.random() * charList.length)];
   return ranChar;
}

function populatePassword(pwLen, charList) {
 
  // var typePos = 0;
  var newChar;
  var pw = "";

  for (i = 0; i < pwLen; i++) {
    newChar = getRandom(charList);
    pw = pw + newChar;
      // if (typePos >= typeSel.length) {
      // typePos = 0;
    }

    // newChar = getRandom(typeSel[typePos]);
    // pw = pw + newChar;
    // typePos++;
  // }
  return pw;
}

function buildCharList(typeSel) {
  var charList = "";

  for (var i = 0; i < typeSel.length; i++) {
    var type = typeSel[i];

    if (type == 'u') {
      charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } 

    if (type == 'l') {
      charList += "abcdefghijklmnopqrstuvwxyz";
    }

    if (type == 'n') {
      charList += "0123456789";
    }

    if (type == 's') {
      charList += "!@#$%^&*(){}|[]\/?<>";
    }
  }
  return charList;
}

// build a temporary string that has the combined types,
// then select randomly from the temp string.

// Create a pseudo-random password with user's input
function generatePassword() {
  var pwLength = getPWLength();
  var typeSelections = getTypeSelections();
  console.log(typeSelections);
  var charList = buildCharList(typeSelections);
  console.log(charList);
  var pw = populatePassword(pwLength, charList);
  return pw;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Here is your randomly generated secure password:\n" + 
    password;
    generateBtn.removeEventListener("click", writePassword);
}

/* <button aria-hidden="false" type="button" class="copy-icon">
  <span class="visually-hidden">Copy to Clipboard</span>
</button> */
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



