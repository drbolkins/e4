$(document).ready (function () {
	
	var form = $('form');
	var imie = $('input').eq(0);
	var nazwisko = $('input').eq(1);
	var pass1 = $('input').eq(2);
	var pass2 = $('input').eq(3);
	var checkbox = $('input').eq(4);
		
	form.on('submit', function (){
		event.preventDefault();
		$('div.error_message').html('');
		$('div.success_message').html('');
		var valid = true;
		
		if (imie.val().length < 5) { $('div.error_message').append('imie za krotkie</br>');
			valid = false;
		};
		if (pass1.val() !== pass2.val()) { $('div.error_message').append('hasła nie są identyczne</br>'); 
			valid = false;
		};
		if (!checkbox.prop('checked')) { $('div.error_message').append('zaznacz haczyk</br>');
			valid = false;
		};
		if (valid === true) { $('div.success_message').append('wszystko ok');
			console.log (form.serialize());
		}
		event.preventDefault();
		});
		
	});
