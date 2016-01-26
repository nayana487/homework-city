$(document).ready(function() {
	// Code won't execute until DOM is ready.
$("form").submit(function(event) {
		event.preventDefault();
		document.getElementById("city-type").value = "";
	});
	// Prevents default form submission.
	// Resets text input field after submission.

var submit_btn = document.getElementById("submit-btn");
	// Defines the element that we're selecting.

submit_btn.addEventListener("click", change);
	// When a user clicks the "Update" button, the background changes.

function change() {
	var city = document.getElementById("city-type").value.trim();
	// Defines user-inputted city and removes extra spaces before and after string.

	if (city == "New York" || city == "NYC" || city == "New York City") {
		$("body").removeClass().addClass("nyc");
	}
	// Removes existing class.
	// Adds a new class (with background defined in CSS). 
	else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
		$("body").removeClass().addClass("sf");
	}
	else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
		$("body").removeClass().addClass("la");	
	}
	else if (city == "Austin" || city == "ATX") {
		$("body").removeClass().addClass("austin");	
	}
	else if (city == "Sydney" || city == "SYD") {
		$("body").removeClass().addClass("sydney");	
	}
	else {
		$("body").removeClass();
	}
	// Resets background to default if user enters anything other than defined city.
}
});