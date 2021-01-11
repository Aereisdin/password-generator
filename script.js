



var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

// var capLet = capLetter[Math.floor(Math.random() * capLetter.length)];
// var lowLet = lowLetter[Math.floor(Math.random() * lowLetter.length)];
// var num = number[Math.floor(Math.random() * number.length)];
// var spec = special[Math.floor(Math.random() * special.length)];

// console.log(capLet)
// console.log(lowLet)

// var capLet = capLetter.charAt(Math.floor(Math.random() * capLetter.length));

// var lowLet = lowLetter.charAt(Math.floor(Math.random() * lowLetter.length));

// var num = number.charAt(Math.floor(Math.random() * number.length));

// var spec = special.charAt(Math.floor(Math.random() * special.length));

function button(){
        var length = prompt("How long would you like your passord to be? Please enter a number between 8 and 128.");{
            if(length < 8){
                prompt("Please select a higher number.");
            }
            else if(length > 128){
                prompt("Please select a lower number.");
            }
        }
        
        var capLet = capLetter[Math.floor(Math.random() * capLetter.length)];
        var lowLet = lowLetter[Math.floor(Math.random() * lowLetter.length)];
        var num = number[Math.floor(Math.random() * number.length)];
        var spec = special[Math.floor(Math.random() * special.length)];
        for(var i = 0; i < length; i++){
        var choice = prompt("Please choose the next character in your new password. c for a capital letter, l for a lowercase letter, n for a number or s for a special character.");{
            if(choice === "c"){
            document.getElementById("password").innerHTML = capLet;
             }
             else if(choice === "l"){
            document.getElementById("password").innerHTML = lowLet;
             }
             else if(choice === "n"){
            document.getElementById("password").innerHTML = num;
             }
             else if(choice === "s"){
            document.getElementById("password").innerHTML = spec;
            }
            else prompt("That is not a valid choice") 
        }
    }
        
}
    

