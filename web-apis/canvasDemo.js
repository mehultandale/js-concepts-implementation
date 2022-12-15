

/* Getting and configuring the canvas element */
function configureCanvas() {
	const canvas = document.getElementById("canvasDemo");
	canvas.height = 350;
	canvas.width = 350;
	const ctx = canvas.getContext("2d");
	return {
		"canvas": canvas,
		"ctx": ctx
	};
}

function insertCanvas() {

	let canvasObj = configureCanvas();

	/* Adding text to it */
	canvasObj.ctx.font = "12px serif";
	canvasObj.ctx.fillStyle = "blue";
	canvasObj.ctx.fillText("This text is on a canvas!", 100, 100);

	/* Drawing a line under it */
	canvasObj.ctx.beginPath();
	canvasObj.ctx.moveTo(100, 110);
	canvasObj.ctx.lineTo(220, 110);
	canvasObj.ctx.stroke();

	/* Adding a gradient to a rectangle */
	let gradient = canvasObj.ctx.createLinearGradient(0, 130, 700, 700);
	gradient.addColorStop(0, "yellow");
	gradient.addColorStop(0.2, "red");
	gradient.addColorStop(0.6, "blue");
	canvasObj.ctx.fillStyle = gradient;
	canvasObj.ctx.fillRect(0, 130, 700, 700);
}


export default {
	"insertCanvas": insertCanvas
}