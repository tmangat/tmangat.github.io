$(document).ready(function () {
	// Image paths array
	const imageArray = [
		"images/gc/mw2.jpg",
		"images/gc/sm64.jpg",
		"images/gc/mc.jpg",
		"images/gc/melee.jpg",
		"images/gc/lm.jpg",
		"images/gc/mk64.jpg",
		"images/gc/pmss.jpg",
		"images/gc/pmp.jpg",
		"images/gc/ac3.jpg",
		"images/gc/l4d2.jpg",
		"images/gc/lb2.jpg",
		"images/gc/fifa-street.jpg",
		"images/gc/fifa15.jpg",
		"images/gc/bo1.jpg",
		"images/gc/fm4.jpg",
		"images/gc/mp6.jpg",
		"images/gc/bo3.jpg",
		"images/gc/halo3.jpg",
		"images/gc/bo2.jpg",
		"images/gc/waw.jpg",
		"images/gc/lb1.jpg",
		"images/gc/gta5.jpg",
		"images/gc/mw1.jpg",
		"images/gc/sm3.jpg",
		"images/gc/mkx.jpg",
		"images/gc/fifa17.jpg",
		"images/gc/mw3.jpg",
		"images/gc/dk64.jpg",
		"images/gc/destiny.jpg",
		"images/gc/nsmb.jpg",
		"images/gc/smb-duck-hunt.jpg",
		"images/gc/payday2.jpg",
		"images/gc/sm3w.jpg",
		"images/gc/smo.jpg",
		"images/gc/nba2k13.jpg",
		"images/gc/fifa14.jpg",
		"images/gc/nhl2k10.jpg",
		"images/gc/nhl09.jpg",
		"images/gc/dkr.jpg",
		"images/gc/fifa13.jpg",
		"images/gc/nhl11.jpg",
		"images/gc/fifa16.jpg"
	];

	// Loop through the array and create <img> elements
	imageArray.forEach(imagePath => {
		// Create an <img> element for each image path in the array
		const imgElement = $("<img>").attr("src", imagePath);

		// Append the <img> element to the gallery div
		$("body").append(imgElement);
	});
});