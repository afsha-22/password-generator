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
  var pwd1 = "";

  enterLen();

  function enterLen(){
    var length = prompt("What's the preffered length of the password?");
    if(length){
    checkLen(length);
    } else {
      return;
    }
  }

  function checkLen(length){
    if (length<8 || length>128){
    enterLen();
    } else {
      fun1(length);
    }
  }

  function fun1(length){
    
    var char = "";

    var Dlower = confirm("Do you want LowerCase?");
    if(Dlower) {
      var lower = "abcefghijklmnopqrstqvwxyz";
      char = lower;
    }
  
    var Dupper = confirm("Do you want UpperCase?");
    if(Dupper){
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      char = char + upper;
    }

    var Dnumber = confirm("Do you want Number?");
    if(Dnumber){
      var number = "0123456789";
      char = char + number;
    }

    var Dspecial = confirm("Do you want Special Character?");
    if(Dspecial){
      var special = '~!@#$%^&*()_+{}":?><;.,';
      char = char + special;
    }

    pwd();

    function pwd(){
      pwd1 = "";
    for (var i=0;i<length;i++){
      pwd1 = pwd1 + char.charAt(Math.floor(Math.random()*char.length));
    }
    console.log(pwd1);
    return pwd1;
    }
    
// This verifies if string contains an uppercase or not
//console.log("Lower: " + /[a-z]/.test(pwd1));
if(Dlower == true){
  lowV = /[a-z]/.test(pwd1);
  console.log("VLower: " +lowV);
  if(!lowV){
    pwd();
  }
}

// This verifies if string contains a lowercase or not
//console.log("Upper: " + /[A-Z]/.test(pwd1));
if(Dupper == true){
  uppV = /[A-Z]/.test(pwd1);
  console.log("VUpper: " +uppV);
  if(!uppV){
    pwd();
  }
}


// This verifies if string contains a number or not
//console.log("Num: " + /\d/.test(pwd1));
if(Dnumber == true){
  numV = /\d/.test(pwd1);
  console.log("VNum: " +numV);
  if(!numV){
    pwd();
  }
}

// This verifies if string contains a special char or not
//console.log("Special: " + /[~!@#$%^&*()_+{}":?><;.,]/.test(pwd1));
if(Dspecial == true){
  speV = /[~!@#$%^&*()_+{}":?><;.,]/.test(pwd1);
  console.log("VSpecial: " +speV);
  if(!speV){
    pwd();
  }
}

    return pwd1;
  }
  return pwd1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


