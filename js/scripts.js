$(document).ready(function () {
	// Path to the JSON file
	const jsonFile = "!gc.json";

	// Fetch the JSON file
	$.getJSON(jsonFile, function (images) {
		// Loop through the image list and append to the body
		images.forEach(image => {
			// Create an <img> element and set its src
			const imgElement = $("<img>").attr("src", image);
			$("body").append(imgElement);
		});
	}).fail(function () {
		console.error("Failed to load the JSON file.");
	});
});