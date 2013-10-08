$(document).ready(function(){
	var target = Math.floor(100 * Math.random());
	var dif;
	var lastdif;
	var guesses = '';
	var guess;

	$('#hint').click(function(){ // aka cheat
		$('#target').val(target);		
	});

	$('#play').click(function(){ // aka reset
		target = Math.floor(100 * Math.random());
		guesses = '';
	});

	$('#guess').change(function(){
		guess = $('#guess').val();
		playGame(guess);
	});

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
				$('#err').val(guesses);
			}
		}
	}
});
