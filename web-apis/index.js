

import batteryStatusDemo from "./batteryStatusDemo.js";


/* Battery status */
batteryStatusDemo.logBatteryStatus();


/* Getting and configuring the canvas element */
const canvas = document.getElementById("canvasDemo");
canvas.height = 350;
canvas.width = 350;
const ctx = canvas.getContext("2d");

/* Adding text to it */
ctx.font = "12px serif";
ctx.fillStyle = "blue";
ctx.fillText("This text is on a canvas!", 100, 100);

/* Drawing a line under it */
ctx.beginPath();
ctx.moveTo(100, 110);
ctx.lineTo(220, 110);
ctx.stroke();

/* Adding a gradient to a rectangle */
let gradient = ctx.createLinearGradient(0, 130, 700, 700);
gradient.addColorStop(0, "yellow");
gradient.addColorStop(0.2, "red");
gradient.addColorStop(0.6, "blue");
ctx.fillStyle = gradient;
ctx.fillRect(0, 130, 700, 700);