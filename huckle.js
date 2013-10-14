$(document).ready(function(){ 
	// Javascript. All the $() functions are from the JQuery library.
	// run after the page is initially loaded
	// variables used in game
	var target = Math.floor(100 * Math.random());
	var dif;
	var lastdif;
	var guesses = '';
	var guess;

	$('#hint').click(function(){ // aka cheat - show target value on screen
		$('#target').val(target);		
	});

	$('#play').click(function(){ // aka reset - generate a new target number between 0 and 100
		target = Math.floor(100 * Math.random());
		guesses = '';
	});

	$('#guess').change(function(){ // any change in the guess is responded to as a move
		guess = $('#guess').val();
		playGame(guess);
	});

	// main game - first check guess is a number
	// next check if we have a winner
	// then on first guess, say if it is too big or too small
	// otherwise compare guess to see if it is "hotter" or "colder" than the last and say (and color it) so
	function playGame(guess){
		if (isNaN(guess)){
			$('#feedback').val('Enter a number from 0 to 100');
		}
		else{
			dif = guess - target;
			if (dif == 0){
				$('#feedback').val('You won!');
			}
			else{
				if (guesses.length == 0){
					if (dif < 0){
						$('#feedback').val('too small');
					}else{
						$('#feedback').val('too big');
					}
					lastdif = Math.abs(dif);
				}else{
					dif = Math.abs(dif);
					if (dif > lastdif){
						$('#feedback').val('colder');
						$('#feedback').css("color", "blue");
					}else{
						$('#feedback').val('warmer');			
						$('#feedback').css("color", "red");
					}
					lastdif = dif;
				}
				guesses += guess + ', ';
				$('#err').val(guesses);		// we show a list of all guesses
			}
		}
	}
});
