$(document).ready(function () {
	var sample_classed_itanz = $(".sample_class");
	var sample_id_element = $("#sample_id");
	var list_elements = $(".sample_class_2 li");
	var links = $("a");
	var sample_class3_children = $(".sample_class_3").children();
	
	for (var i = 0; i < sample_classed_itanz.length; i++) {
		console.log('tag for sample_class: ' + sample_classed_itanz[i].tagName);
	};
	
	console.log('classes for #sample_id: ' + sample_id_element.attr('class'));
	
	for (var i = 0; i < list_elements.length; i++) {
		console.log('list elements text: ' + list_elements[i].textContent);	
	}
	
	for (var i = 0; i < links.length; i++) {
		console.log('link url: ' + links[i].getAttribute('href'));	// można dodać sprawdzenie czy href != null żeby nie wyświetlało ostatniego elementu a
	} 
	
	for (var i = 0; i < sample_class3_children.length; i++) {
		console.log('sample_class_3 child tag: ' + sample_class3_children[i].tagName);	
	}
});