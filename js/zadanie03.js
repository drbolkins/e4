$(document).ready(function() {
	var User = function(nazwa,email,opis) {
		this.nazwa = nazwa;
		this.email = email;
		this.opis = opis;
		
	};
	
	User.prototype.welcomeUser = function() {
		console.log('welcome ' + this.nazwa);
	};
	
	var Andrzej = new User("Andrzej","Andrzej@andrzej.com", "andrzej");
	Andrzej.welcomeUser();
	
	Andrzej.sayGoodbye = function () {
		console.log('bye ' + this.nazwa);
	};
	
	Andrzej.sayGoodbye();
});