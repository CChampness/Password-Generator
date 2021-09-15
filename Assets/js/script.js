// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password length
function getPWLength() {
  var pwLen = 0;
  while (pwLen < 8 || pwLen > 128) {
    pwLen = prompt("Enter desired password length (8 - 128)\n" +
                          "or Cancel to quit");
    if (pwLen === null) {
      // This would be the case if the user hits "Cancel"
      return null;
    }
    if (pwLen === '') {
      alert(pwLen + "No length given!");
    } else if (pwLen < 8) {
      alert(pwLen + " is too short!");
    } else if (pwLen > 128) {
      prompt(pwLen + " is too long!");
    }
  }
  return pwLen;
}

function getTypeSelections() {
  /* Use confirms yes or no for all 4 types */
  var typeList = "";
  while (typeList == "") {
    if (confirm("Click OK to include upper case letters\n"+
                 "or click Cancel to skip upper case letters")) {
      typeList += "u";
    }

    if (confirm("Click OK to include lower case letters\n"+
                "or click Cancel to skip lower case letters")) {
      typeList += "l";
    }

    if (confirm("Click OK to include special characters\n"+
                "or click Cancel to skip special characters")) {
      typeList += "s";
    }

    if (confirm("Click OK to include numbers\n"+
                "or click Cancel to skip numbers")) {
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

// Build a string that has all of the combined types
function buildCharList(typeSel) {
  var charList = "";

  // Using the string of types to combine, build a string
  // of all of the charcters from all of the types
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

// Create a random password with user's input
function generatePassword() {
  var pwLength = getPWLength();
  if (pwLength === null) {
    return null;
  }

  // Ask user for what types of characters to include
  var typeSelections = getTypeSelections();
  if (typeSelections == null) {
    return null;
  }
  // Build one list of characters of all of the chosen types
  var charList = buildCharList(typeSelections);

  // Use the character list to get a password of the chosen length
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
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
