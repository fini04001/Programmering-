var generation = Math.floor(Math.random()*100)+1;
var guess = document.getElementById("number");
var text = document.getElementById("text");
var guesses = 0;

function c1(){


        guesses++;

        if(guess.value<generation){
            text.innerHTML="Too Low"; 
     
        }
        else if(guess.value>generation){
            text.innerHTML="Too High";
 
        }
    
    else{
    text.innerHTML="You guessed correctly, you got it right in "+ guesses+" guesses!";
    
    }

}        
        



