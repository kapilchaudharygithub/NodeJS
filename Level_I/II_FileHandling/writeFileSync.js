/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Create new file Sync with some text */
/**
 * writeFileSync: takes min-2 para's
 * 1. name and path(./-->in the current directory)
 * 2. Data
 */
fs.writeFileSync("./writeFileSync.txt", "Hey there , I am created by write file method of fs synchronously");
/**
 * Whenver the function is calling it replace new new text in the file if something is already there
 */
