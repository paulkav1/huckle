/* -------- TODO ----------------- */
// CSS makeover
// jQuery animation

$(document).ready(function(){
	var target = Math.floor(100 * Math.random());
	var dif;
	var lastdif;
	var guesses = '';
	var i = 0;
	var g;

	$('#hint').click(function(){
		$('#target').val(target);		
	});

	$('#play').click(function(){
		target = Math.floor(100 * Math.random());
		guesses = '';
		i = 0;
	});

	$('#guess').change(function(){
		g = $('#guess').val();

		if (isNaN(g)){
			$('#feedback').val('Enter a number');
		}
		else{
			dif = g - target;
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
					}else{
						$('#feedback').val('warmer');			
					}
					lastdif = dif;
				}
				guesses += g + ', ';
				$('#err').val(guesses);
			}
		}
	});

})
