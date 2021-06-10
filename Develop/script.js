// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. This is the first function called.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//This function is called from writePassword()
function generatePassword(){
  var password = "";
  var char = "";
  var inputLower;
  var lower = "abcefghijklmnopqrstqvwxyz";
  var inputUpper;
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var inputNumber;
  var number = "0123456789";
  var inputSpecial;
  var special = '~!@#$%^&*()_+{}":?><;.,';
  var length;

  //Calls the function which asks user to enter the length of the password
  userEnterLength();

  // Logic to ask user to enter the length of the password
  function userEnterLength(){
    length = prompt("What's the prefered length of the password?");
    if(length){
    checkLength(); //Calls the function which verify the length entered by the user
    } else {
      return;
    }
  }

  // Logic to verify the length is between 8 and 128
  function checkLength(){
    if (length<8 || length>128){
      alert("Password must be between 8 and 128 characters.");
      userEnterLength(); //If length criteria is not met, request user to enter the length again
    } 
    else {
      criteria(); //Calls the function which ask user what different characters they want in the password
    }
  }

  // Logic to ask user what different characters they want in the password
  function criteria(){
    inputLower = confirm("Do you want  a LowerCase in the password?");
    if(inputLower) {
      char = lower;
    }
  
    inputUpper = confirm("Do you want a UpperCase in the password?");
    if(inputUpper){
      char = char + upper;
    }

    inputNumber = confirm("Do you want a Number in the password?");
    if(inputNumber){
      char = char + number;
    }

    inputSpecial = confirm("Do you want a Special Character in the password?");
    if(inputSpecial){
      char = char + special;
    }

    if(!inputLower && !inputUpper && !inputNumber && !inputSpecial){
      alert("Sorry, can't generate any password with no input characters");
    }
  }

  //Calls the function that generates the password
  passwordLogic();

  //Logic to generate the password
  function passwordLogic(){
    password = "";
    for (var i=0;i<length;i++){
      password = password + char.charAt(Math.floor(Math.random()*char.length));
    }
    console.log(password);
    verifyPassword(); //Calls the function which verify all the criterias are met
  }
  
  //Logic to verify all the criterias are met
  function verifyPassword(){
    // This verifies if string contains an uppercase, if it's one of the criteria
    if(inputLower){
      var verifyLower = /[a-z]/.test(password);
      console.log("VLower: " +verifyLower);
      if(!verifyLower){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a lowercase, if it's one of the criteria
    if(inputUpper){
      verifyUpper = /[A-Z]/.test(password);
      console.log("VUpper: " +verifyUpper);
      if(!verifyUpper){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a number, if it's one of the criteria
    if(inputNumber){
      verifyNumber = /\d/.test(password);
      console.log("VNum: " +verifyNumber);
      if(!verifyNumber){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a special char, if it's one of the criteria
    if(inputSpecial){
      verifySpecial = /[~!@#$%^&*()_+{}":?><;.,]/.test(password);
      console.log("VSpecial: " +verifySpecial);
      if(!verifySpecial){
        passwordLogic();
        return;
      }
    }
  }

  return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


