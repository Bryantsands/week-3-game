var words = ['bruno mars','drake', 'kanye', 'calvin harris'];
		var computerGuess = (words[Math.floor(Math.random()*words.length)]);
		var lives = 8;
		var missed;
		var wins = 0;
		  // store correct letters here
  	var storeCorrect = [];
	
  	//start array for correct
	for(var c = 0; c < computerGuess; c++){
		storeCorrect[c] = "_";
	}
	document.getElementById("word").innerHTML= (
		storeCorrect.join(""));
	//store letters missed to display
	var storeWrong = [];
	//array for wrong stored
	for(var w = 0; w < lives; w++) {
		storeWrong[w] = "_";
	}
	document.getElementById("guessed").innerHTML = (
		storeWrong.join(""));
	document.getElementById("guessesleft").innerHTML=("Number of guesses left: " + lives);

	document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	missed = false
	for (var i = 0; i < computerGuess.length; i++)
			{
			if (userGuess === computerGuess.charAt(i))
				{
				console.log("Good Job! You guessed " + computerGuess.charAt(i));
				storeCorrect[i] = computerGuess.charAt(i);
				missed = true;
				}
			else if((i === (computerGuess.length-1))
				&& (missed== false)){
				console.log("Wrong!!! You guessed " +
					userGuess);
				storeWrong[wins] = userGuess;
				wins++;
				lives--;
			}
		}
		console.log(storeCorrect.join(""));
		document.getElementById("word").innerHTML = (
			storeCorrect.join(""));
		console.log(storeWrong.join(""));
		document.getElementById("missed").innerHTML = (
			storeWrong.join(""))
		console.log("Number of lives left: " + lives);
		document.getElementById("lives").innerHTML = (
			"Number of lives left: " + lives);
		//condition of ending
		if(lives == 0){
			console.log("game over ")
		}

		else if(storeCorrect.join("")== computerGuess){
			console.log("Great job! You win! Press any key to continue!");
		}


}