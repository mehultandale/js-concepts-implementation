
/* Getting and configuring the canvas element */
const canvas = document.getElementById("canvasDemo");
const ctx = canvas.getContext("2d");

/* Adding text to it */
ctx.font = "12px serif";
ctx.fillText("This text is on a canvas!", 100, 100);

/* Draw a line under it */
ctx.beginPath();
ctx.moveTo(100, 110);
ctx.lineTo(220, 110);
ctx.stroke();