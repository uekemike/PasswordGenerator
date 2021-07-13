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



function generatePassword(){
  var includeLowercaseLetter ="abcdefghijklmnopqrstuvwxyz";
  var includeUpperCaseLetter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var includeSpecialChar = "!@#$%^&*()_";
  var includeNumbers="0123456789";
  var password =""
  
  var minLen = 8;
  var maxLen = 128;
  //var isNotAlphabet = true;
  var pwdLength =prompt("Enter password length. Must be between 8 and 128 in length")

  //console.log( pwdLength )
 
  if (isNaN(pwdLength)){
    alert("Password must be a number")
  }else if(pwdLength < minLen || pwdLength > maxLen){
    alert("Password lenght cannot be less then 8 or greater than 128")
  }else {
    includeLowercaseLetter =   confirm("Would you like to include Lowercase letters")
    includeUpperCaseLetter =   confirm("Would you like to include Uppercase letters")
    includeSpecialChar =   confirm("Would you like to include special characters")
    includeNumbers =   confirm("Would you like to include Numbers")
  }
  if(includeLowercaseLetter){

  }else if(includeSpecialChar){

  }else if(includeNumbers){

  } else(includeSpecialChar)

}



//alert("Click OK button to generate password")