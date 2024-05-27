/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Read file "readFileSync.txt" from the same current directory */
/**
 * readFileSync: takes min-2 para's
 * 1. name and path(./-->in the current directory)
 * 2. file type
 */
const result=fs.readFileSync("./readFileSync.txt", "utf-8");
/** we are storing result in a variable because "readFileSync returns the result so we have to store in a variable to perform some operarions on it or it use it somewhere else" */

console.log(result);
