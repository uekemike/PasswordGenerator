// Assignment Code
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
  }else if(pwdLength < minLen || pwdLength > maxLen){
    alert("Password lenght cannot be less then 8 or greater than 128")
  }else {
    var includeLowercaseLetter =   confirm("Would you like to include Lowercase letters")
    var upperCaseLetter =   confirm("Would you like to include Uppercase letters")
  }
  if(includeLowercaseLetter){
    
  }else if(upperCaseLetter){
    
  }

}

//alert("Click OK button to generate password")