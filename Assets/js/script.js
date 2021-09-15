// Assignment Code
var generateBtn = document.querySelector("#generate");

// function clearCardHeader() {
//   console.log("enteringclearCardHeaser");
//   const el = document.querySelector(".card-header h2");
//   console.log("Here is el: " + el);
//   console.log("Content: " + el.textContent);
//   el.textContent = "Generate new password";
//   el.append();
//   console.log("Content: " + el.textContent);
// }

// Prompt user for password length
function getPWLength() {
  var pwLen = 0;
  // clearCardHeader();
  var pwTxt = document.querySelector("#password");
  pwTxt.value = "";
  while (pwLen < 8 || pwLen > 128) {
    pwLen = window.prompt("Enter desired password length (8 - 128)");
    if (pwLen === null) {
      // This would be if the user hit "cancel"
      return null;
    }
    console.log("pwLen: " + pwLen)
 }
  return pwLen;
}

function getTypeSelections() {
  /* Use confirms for all 4 types */
  var typeList = "";
  while (typeList == "") {
    if (confirm("Click OK to include upper case letters\n"+
                 "or click Cancel to skip upper case letters")) {
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
  
    if (typeList == "") {
      if( !confirm("Nothing selected.  Do you wish to continue?\n" +
                    "Press OK to continue or Cancel to quit")) {
        return null;
      }
    }
  }
  return typeList;
}

/* Take in a string containing all of the characters that are in the
   selected types (Upper case, lower case, numbers, and special characters).
   Return with the one randomly picked character from the list. */
function getRandom(charList) {
   var ranChar = charList[Math.floor(Math.random() * charList.length)];
   return ranChar;
}

// Fill in the new password to the requested length
function populatePassword(pwLen, charList) {
  var newChar;
  var pw = "";

  for (i = 0; i < pwLen; i++) {
    newChar = getRandom(charList);
    pw += newChar;
  }
  return pw;
}

// build a string that has all of the combined types
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

// Create a pseudo-random password with user's input
function generatePassword() {
  var pwLength = getPWLength();
  if (pwLength === null) {
    return null;
  }

  var typeSelections = getTypeSelections();
  if (typeSelections == null) {
    return null;
  }
  var charList = buildCharList(typeSelections);
  var pw = populatePassword(pwLength, charList);
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === null) {
    return;
  }
  var passwordText = document.querySelector("#password");

// When the new password is ready,
// put up this message instead of "Generate a Password"
  const el = document.querySelector(".card-header h2");
  // console.log(el);
  el.textContent = "Here is your randomly generated password:";

  passwordText.value = password;
    // generateBtn.removeEventListener("click", writePassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



