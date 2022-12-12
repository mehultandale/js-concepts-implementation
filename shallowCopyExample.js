

function shallowCopyExample() {
	console.log("\x1b[44m%s\x1b[0m", "Concept: Shallow copy");
	let userDevice = {
		"name": "XYZ co"
	};

	console.log("Initial property value of source object: ");
	console.log(userDevice);

	let userPreferredBrand = userDevice;
	userPreferredBrand.name = "ABC co";
	console.log("Property value of source object (after the shallow copy's property is changed): ");
	console.log(userDevice);
	console.log("\n");
}


module.exports = shallowCopyExample;