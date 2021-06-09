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
  var Dlower;
  var lower = "abcefghijklmnopqrstqvwxyz";
  var Dupper;
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Dnumber;
  var number = "0123456789";
  var Dspecial;
  var special = '~!@#$%^&*()_+{}":?><;.,';
  var length;

  //Calls the function which asks user to enter the length of the password
  userEnterLength();

  //Logic to ask user to enter the length of the password
  function userEnterLength(){
    length = prompt("What's the preffered length of the password?");
    if(length){
    checkLength(); //Calls the function which verify the length entered by the user
    } else {
      return;
    }
  }

  //Logic to verify the length is between 8 and 128
  function checkLength(){
    if (length<8 || length>128){
      alert("Password must be between 8 and 128 characters.");
      userEnterLength(); //If length criteria is not met, request user to enter the length again
    } 
    else {
      criteria(); //Calls the function which ask user what different characters they want in the password
    }
  }

  //Logic to ask user what different characters they want in the password
  function criteria(){
    Dlower = confirm("Do you want LowerCase?");
    if(Dlower) {
      char = lower;
    }
  
    Dupper = confirm("Do you want UpperCase?");
    if(Dupper){
      char = char + upper;
    }

    Dnumber = confirm("Do you want Number?");
    if(Dnumber){
      char = char + number;
    }

    Dspecial = confirm("Do you want Special Character?");
    if(Dspecial){
      char = char + special;
    }

    if(!Dlower && !Dupper && !Dnumber && !Dspecial){
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
    if(Dlower == true){
      lowV = /[a-z]/.test(password);
      console.log("VLower: " +lowV);
      if(!lowV){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a lowercase, if it's one of the criteria
    if(Dupper == true){
      uppV = /[A-Z]/.test(password);
      console.log("VUpper: " +uppV);
      if(!uppV){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a number, if it's one of the criteria
    if(Dnumber == true){
      numV = /\d/.test(password);
      console.log("VNum: " +numV);
      if(!numV){
        passwordLogic();
        return;
      }
    }

    // This verifies if string contains a special char, if it's one of the criteria
    if(Dspecial == true){
      speV = /[~!@#$%^&*()_+{}":?><;.,]/.test(password);
      console.log("VSpecial: " +speV);
      if(!speV){
        passwordLogic();
        return;
      }
    }
  }

  return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


