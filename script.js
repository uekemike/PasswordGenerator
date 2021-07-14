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
 

  var pwdLength = prompt("Enter password length. Must be between 8 and 128 in length.");

    if (isNaN(pwdLength)){
    alert("Password must be a number");
    return;
  }
  else if (pwdLength < 8 || pwdLength > 128){
    alert("Password length cannot be less then 8 or greater than 128");
    return;
  } else{
    var includeLowercaseLetter =   confirm("Would you like to include Lowercase letters");
    var includeUpperCaseLetter =   confirm("Would you like to include Uppercase letters");
    var includeSpecialChar =   confirm("Would you like to include Special characters");
    var includeNumbers =   confirm("Would you like to include Numbers");

  }
//Creating your variables, splitting and setting my arrays
  var lowerCaseLetter ="a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var lowerCaseArray = lowerCaseLetter.split(" ");
  var upperCased = lowerCaseLetter.toUpperCase();
  var upperCasedArray = upperCased.split(" ");
  var specialChar="! @ # $ % ^ & * ( ) _ + ";
  var specialCharArray = specialChar.split(" ");
  var numbersToGenerate= "0 1 2 3 4 5 6 7 8 9";
  var numbersToGenArray = numbersToGenerate.split(" ");

  console.log("My Array lowercase is " + lowerCaseArray);
  console.log("My Array uppercase is" + upperCasedArray);
  console.log("My Array special char is" +specialCharArray);
  console.log("My Array numbers are" +numbersToGenArray);

  
// if the user does not select any option throw an alert
  if (!includeUpperCaseLetter && !includeLowercaseLetter && !includeNumbers  && !includeSpecialChar){
    alert("You must select at least one character type!");
    return;
}
// storing all my data in array by concatenating seclection
  var getSelectionArray = []
  if (includeLowercaseLetter){
    getSelectionArray =getSelectionArray.concat(lowerCaseArray)
  }
  if (includeUpperCaseLetter){
    getSelectionArray =getSelectionArray.concat(upperCasedArray)
  }
  if (includeNumbers){
    getSelectionArray =getSelectionArray.concat(numbersToGenArray)
  }
  if (includeSpecialChar){
    getSelectionArray =getSelectionArray.concat(specialCharArray)
  }

passwordGeneratorLoop();

}

function passwordGeneratorLoop(){var password =[];
  for (var i = 0; i < pwdLength; i++){
   var autoGeneratePassword = getSelectionArray[Math.floor(Math.random() * getSelectionArray.length)];
   password += autoGeneratePassword;
  }

   console.log ("Generated password is " + password)

   return password;
  
  }

