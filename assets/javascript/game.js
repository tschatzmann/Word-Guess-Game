       // Creating variables to hold the number of wins, losses, and ties. They start at 0.
            // BUild variables
            var wins = 0;
            var losses = 0;
            var guessesRemaining = 6;
            var underScoreCount= 0;
            var missedLetters = []
            console.log('at set var underScoreCount ' + underScoreCount)
            var missedLetters = []; 
            // BUild arrays
            //const songChoice = ["Summertime Sadness", "Summer Loving", "Indian Summer"];
            const songChoice = ["cats", "dog", "piggy"];
            // Grab user choics
        
            // Create variables that hold references to the places in the HTML where we want to display things.
            var directionsText = document.getElementById("directions-text");
            var userChoiceText = document.getElementById("userGuess-text");
            var songText = document.getElementById("songchoice-text");
            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var rando= Math.floor(Math.random() * songChoice.length -1);
            console.log(rando);
            console.log("songCholcelength " + songChoice.length)
            var song = songChoice[rando];
           // str = song;
            console.log(song)
            str = song
            var underScoreCount = str.length;
            console.log("underSCoreCount " + underScoreCount);
            var answerArray = [];
            ///convert underscore:
            for (i =0; i <underScoreCount; i++){
                answerArray[i]= " __ "; 
            }
            console.log(answerArray);
            songText.textContent = "The computer chose: " + song;
        
            // This function is run whenever the user presses a key.
            document.onkeyup = function(event) {
        
              // Determines which key was pressed.
              var userGuess = event.key;
              console.log("userGuess " + userGuess);
              console.log('beginning at userGuess ' + 'underScoreCount ' + underScoreCount + 'guessesRemaining ' + guessesRemaining)
             
            
                              // Hide the directions
           directionsText.textContent = "";
           function checkforWin(arr){
            console.log('in function ' + arr)
               if (arr = 0){
                wins++;
                console.log('wins ' + wins);
               }
           }
             //5 results
            //Comparison of 
            // a) Do we have letters remaining ( underscore Count >0)
            // b) Do we have guesses remaining (Guesses Remaining >0)
            // c) Determine position of userGuess
           // var checkLetter = Str.includes(userGuess)
           // console.log(checkLetter)
            var usedPosition = missedLetters.indexOf(userGuess);
            if (usedPosition >=0){
                alert('You have already used letter ' + userGuess);
            }
            else{
                if (guessesRemaining > 0){ 
                    console.log(userGuess + ' in guessesRemaining loop' )         
                    console.log('beginning if statement ' + 'underScoreCount ' + underScoreCount + 'guessesRemaining ' + guessesRemaining)
                    if (underScoreCount > 0){
                       var Letterfound = 0; 
                        console.log(' letterFound ' + Letterfound);
                        var position = song.indexOf(userGuess);
                        console.log('position of letter '+ position);
                        if (position >= 0){
                            for ( var j = 0; j < song.length; j++){
                            console.log('in loop' + j)
                            if(song[j]===userGuess){
                                console.log('songj ' + song[j])
                                answerArray[j] = userGuess;
                                Letterfound++;
                            }
        
                        }
                        alert("your song" + answerArray);
                         underScoreCount = underScoreCount - Letterfound;
                         console.log('underScount after j loop ' + underScoreCount + 'letterFound ' + Letterfound);
                         checkforWin(underScoreCount);
                        }

                        else{
                            guessesRemaining--;
                            missedLetters = missedLetters + ' ' + userGuess;
                            console.log('missedLetters ' + missedLetters)
                        }                          
                        }else {
                            checkforWin(underScoreCount);
                            }
                               
                    } 
                    else{
                        alert(" you lose");
                        losses++;
                        console.log(losses);
                    } 
            }             

                // Display the user and computer guesses, and wins/losses/ties.
                userGuess.textContent = "You chose: " + userGuess;
                songText.textContent = "The computer chose: " + song;
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " + losses;  
    
        }

function checkforWin() {
    alert('you win');
    wins++;
    console.log('wins ' + wins);
}
