

/* Printing main label */
console.log("\n\n")
console.log("\x1b[46m%s\x1b[0m", ">>>> JS Concepts <<<<");
console.log("\n\n");


/* App's modules */
let iifeExample = require("./iifeExample.js");
let strictMode = require("./strictMode.js");
let classesExample = require("./classesExample.js");
let tryCatchExample = require("./tryCatchExample.js");
let labelExample = require("./labelExample.js");
let shallowCopyExample = require("./shallowCopyExample.js");
let deepCopyExample = require("./deepCopyExample.js");


strictMode();
classesExample();
tryCatchExample();
labelExample();
shallowCopyExample();
deepCopyExample();