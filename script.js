var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generateBtn.addEventListener('click', generatePassword);

function generatePassword(){

  var minLen = 8;
  var maxLen = 128;
  //var isNotAlphabet = true;
  var pwdLength =prompt("Enter password lenght. Must be between 8 and 128 in lenght")

  //console.log( pwdLength )

  if (isNaN(pwdLength)){
    alert("Password must be a number")
  }
  else if (pwdLength < minLen || pwdLength > maxLen){
    alert("Password lenght cannot be less then 8 or greater than 128")
  }
  else (pwdLength > minLen || pwdLength < maxLen)
  {
    var includeLowercaseLetter =   confirm("Would you like to include Lowercase letters")
    var includeUpperCaseLetter =   confirm("Would you like to include Uppercase letters")
    var includeSpecialChar =   confirm("Would you like to include special characters")
    var includeNumbers =   confirm("Would you like to include Numbers")
  }
 if (includeUpperCaseLetter != true && includeLowercaseLetter != true && includeNumbers != true && includeSpecialChar != true){
    alert("You must select at least one character type!")
}
else(includeSpecialChar)
  }

