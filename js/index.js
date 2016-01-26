$(document).ready(function() {
	// Code won't execute until DOM is ready.
$("form").submit(function(event) {
		event.preventDefault();
		$("form").children("#city-type").val("");
	});
	// Prevents default form submission.
	// Resets text input field after submission.

$("#submit-btn").click(change);
	// When a user clicks the "Update" button, the background changes.

function change() {
	var city = $("#city-type").val().trim();
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