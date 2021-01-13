

var password = document.querySelector("#password")

var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

function button(){
        
        var length = prompt("How long would you like your passord to be? Please enter a number between 8 and 128.");{
            if(length < 8){
                prompt("Please select a higher number.");
            }
            else if(length > 128){
                prompt("Please select a lower number.");
            }
        }
        alert("Your password will have lowercase letters by default");

        var capLet = capLetter[Math.floor(Math.random() * capLetter.length)];
        var lowLet = lowLetter[Math.floor(Math.random() * lowLetter.length)];
        var num = number[Math.floor(Math.random() * number.length)];
        var spec = special[Math.floor(Math.random() * special.length)];

        var character = [lowLet,]

        var capital = confirm("Would you like capital letters in your password?");{
            if(capital === true){character.push(capLet); 
                alert("You have selected to add capital letters to your password.");}
            else alert("You will not have capital letters in your password.");
            }

        var numbers = confirm("Would you like numbers in your password?");{
            if(numbers === true){character.push(num);
            alert("You have selected to add numbers to your password.");}
            else alert("You will not have numbers in your password.");
            }

        var specials = confirm("Would you like special characters in your password?");{
            if(specials === true){character.push(spec);
            alert("You have selected to add special characters to your password.")}
            else alert("You will not have numbers in your password.")
             }


        for(var i = 0; i < length; i++){
        
        var choices = character[Math.floor(Math.random() * character.length)]
        document.getElementById("password").innerHTML += choices

        
    }
        
}
    

