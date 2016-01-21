$(document).ready(function() {

$("#submit-btn").click(change);
$("form").submit(function(event) {
		event.preventDefault();
	});

function save() {
	event.preventDefault();
}

function change() {
	var city = $("#city-type").val();

	if (city == "New York" || city == "NYC" || city == "New York City") {
		$("body").removeClass();
		$("body").addClass("nyc");
		}
	else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
		$("body").removeClass();
		$("body").addClass("sf");
	}
	else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
		$("body").removeClass();
		$("body").addClass("la");		
	}
	else if (city == "Austin" || city == "ATX") {
		$("body").removeClass();
		$("body").addClass("austin");		
	}
	else if (city == "Sydney" || city == "SYD") {
		$("body").removeClass();
		$("body").addClass("sydney");		
	}
	else {
		$("body").removeClass();
	}
}
});

/* 
When a user clicks the "Update" button, the background changes.
To do this: 
A user enters a city string.
If there's an existing body class, that class is removed. 
The body class that corresponds to the specific text input is added, modifying the background. 
The new background remains until the page is refreshed or another 
If a user submits a string that isn't specified then the body class is removed and the background image reverts to default.
*/

