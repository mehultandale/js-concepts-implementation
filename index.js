

/* Printing main label */
console.log("\n\n")
console.log("\x1b[46m%s\x1b[0m", ">>>> JS Concepts <<<<");
console.log("\n\n");


/* App's modules */
let iifeExample = require("./console/iifeExample.js");
let strictMode = require("./console/strictMode.js");
let classesExample = require("./console/classesExample.js");
let tryCatchExample = require("./console/tryCatchExample.js");
let labelExample = require("./console/labelExample.js");
let shallowCopyExample = require("./console/shallowCopyExample.js");
let deepCopyExample = require("./console/deepCopyExample.js");


strictMode();
classesExample();
tryCatchExample();
labelExample();
shallowCopyExample();
deepCopyExample();