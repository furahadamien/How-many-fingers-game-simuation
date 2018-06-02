<!DOCTYPE html>
<html>
	<head>
		<title>How many fingers</title>
	</head>
	<body>
		<p><h2>How many fingers game simuation</h2></p>

		<p>You playing against the computer<br><em>The comaputer raises fingers and you try to gues how many fingers it raised</em></p>

		<p>
			<input type="text" id="randomnumber">
			<button id="Guess">YourGuess</button>
		</p>

		<script type="text/javascript">

			document.getElementById("Guess").onclick=function() {
			
				var randomNumber = Math.floor(Math.random() * 6);

				var randomNumberEntered = document.getElementById("randomnumber").value;
				if(randomNumberEntered==randomNumber){
					alert("you got it");
				}else{
					alert("nop, the number is" +" " +randomNumber);
				}
			}	
			
		</script>
		<p>The computer playing against you <br><em>you raise fingers and the computer randomly guesses how man y fingers you raised</em></p>
		<p>How many fingers are you holding up?</p>
        
        <p>
            <select id="myNumber">
                
                <option>0</option>
                
                <option>1</option>
                
                <option>2</option>
                
                <option>3</option>
                
                <option>4</option>
                
                <option>5</option>
            
            </select>
            
            <button id="guess">ComputerGuess!</button>
        
        </p>
        
        <script type="text/javascript">
            
            document.getElementById("guess").onclick = function() {
                
                var myNumber = document.getElementById("myNumber").value;
                
                var gotIt = false;
                
                var numberOfGuesses = 1;
                
                while (gotIt == false) {
                
                    var guess = Math.random();

                    guess = guess * 6;

                    guess = Math.floor(guess);

                    if (guess == myNumber) {
                        
                        gotIt = true;

                        alert ("Got it! It was a " + guess + ". It took me " + numberOfGuesses + " guesses.");

                    } else {

                        numberOfGuesses++;

                    }
                
                }
                
            }
            
            
        </script>

	</body>
</html>