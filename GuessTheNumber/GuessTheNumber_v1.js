/**
 * GuessTheNumber_v1
 *The program generates a random number between 1-100 
 *The user has to guess the number, but they are only given 10 tries/rounds.
 *After each guess, the program will tell the user if their 
 guess was too high, too low, or correct. As well as adding 1+ to the current number of rounds.  
 *The game continues until the user guesses correctly or they ran out of the rounds. 
**/

const prompt= require('prompt-sync')();//Definying and importing prompt function, previously downloaded in terminal

/** generateNumber function. 
 * Generates a radom number between 1-100, using Math.random()*((max-min)+min).
 * This generates a random decimal number, but we want a whole or integer number.
 * Function @returns rNumber (an interger using the Math.round() function).
*/
function generateNumber() {
    const rNumber=Math.random()*((100-1)+1);
    return Math.round(rNumber);
}
/**
 * checkValidInput funcion
 * @param {any} numberToCheck - value to check 
 * @returns {boolean} - Returns True if the input entered is both a integer and a number(Not NaN), otherwise false.
 */
function checkValidInput(numberToCheck){
    return !isNaN(numberToCheck) && Number.isInteger(numberToCheck);
}
/** guessingNumber function.
 * Functions that compares the randomNumber's integer against the user guess.
 * Uses while loop to determine if the number is bigger,smaller, or equal. Adds up the number of rounds
 * and displays message accordingly. 
 * Runs else/if statement to ensure that the user keeps getting prompt until they guess. 
 */
function guessigNumber() {
    //variables
    const randomNumber=generateNumber();
    let userNumber=0;//placeholer
    let rounds =0; //plade holder for the rounds played by the uder before it guesses. 
    console.log("Welcome to the Numbers' Game! Bet you can't guess the number.");
    
    while (randomNumber!==userNumber && rounds<10) {
        
        userNumber = parseInt(prompt("Please enter your best guess---> "), 10);
        rounds++;
        //Validate input
        if(!checkValidInput(userNumber)){
            console.log("Invalid input, please enter a valid whole number.");
            continue; //skip the rest of the loop and prompt user again. 
        }
        
        if(randomNumber>userNumber){
           console.log("You guessed too low, try a bit higher next time!");
        }

        else if(randomNumber<userNumber){
            console.log("You guessed too high, try a bit lower next time!");
        }

        else{
            console.log("Congrast! You guess correctly, ${userNumber} and ${randomNumber} are the same!");
        } 
      
    }

    /*Will only display the message if the rounds equal to 10, since the is the most tries the user is given.
    *Without this if statement the message will display even if the user guesses within the range. 
    */
    if(count==10){
      console.log("You exceded the number of tries, please restart the game! Better luck next time...");  
    }
    
}

guessigNumber();
