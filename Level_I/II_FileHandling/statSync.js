/** Require "fs" module for file Handling */

const fs = require("fs");

/**
 * statSync: takes file path as para
 */
console.log(fs.statSync("./writeFileAsync.txt")
);