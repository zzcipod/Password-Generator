// Assignment Code
// var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCase = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "'", '"'];
var numericalNumeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var finalPass= [];
var pinNumbers;
var specialWords;
var numeWords;
var lowerWords;
var upperWords;
var possibleChars = [];
var optionArray = [];


// Let user choose how many characters put in
function pinlength () {
 pinNumbers = parseInt(prompt("How many chracters would you want to input? The characters limits is between 8 and 128"));

 if(pinNumbers<8 || pinNumbers>128){
   alert("The characters limits is between 8 and 128 ")
   pinlength ();
   return null;
 }
 else if (pinNumbers >= 8 && pinNumbers <= 128){
   console.log(pinNumbers);
   pinNotice();
   return pinNumbers;
 }
}
 
// Let users choose if any special words
 function pinNotice(){
   specialWords = confirm("Any special characters?");
   numeWords = confirm("Any numbers?");
   lowerWords = confirm("Any lowercase letters");
   upperWords = confirm("Any uppercase letters");


 console.log(specialWords);
 console.log(numeWords);
 console.log(lowerWords);
 console.log(upperWords);
 ConTogether();

 if (!specialWords && !numeWords && !lowerWords && !upperWords) {
   alert("You have to input at leaset one character!");
   pinNotice();
   return null();
}
}

function ConTogether() {
  possibleChars=[]; 
if (specialWords) {
possibleChars = possibleChars.concat(specialCase);
}

if (numeWords) {
  possibleChars = possibleChars.concat(numericalNumeral);
  }

  
if (lowerWords) {
    possibleChars = possibleChars.concat(lowerCase);
    }

    
if (upperWords) {
      possibleChars = possibleChars.concat(upperCase);
      }
      
console.log(possibleChars)
var password = PassLoop();
var passwordText = document.querySelector("#password");
passwordText.value =password;
    }

function PassLoop() {
  finalArray=[];
  for (let i = 0; i < pinNumbers; i++) {
        finalArray = finalArray.concat(possibleChars[Math.floor(Math.random() * possibleChars.length)]);
  }
  console.log(pinNumbers);
  console.log(finalArray);
  return finalArray.join ("");
}


// let pinNumbers = validateUserInput()
// userConfirm()
// generateArray()
// var result = arrayLoop(pinNumbers)

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function CreatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", pinlength);
