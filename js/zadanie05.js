$(document).ready(function () {
	var buttons = $('button');
	
	buttons.click(function () {						// działa z 'event' jako argumentem i bez - czy przy okazji mogę się dowiedzieć co to zmieni ewentualnie?
		$('div').html(event.target.dataset.text); 
	});
});