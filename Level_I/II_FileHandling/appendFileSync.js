/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Add new data in  file "readFileSync.txt" from the same current directory */
/**
 * readFileSync: takes min-2 para's
 * 1. name and path(./-->in the current directory)
 * 2. data
 */
fs.appendFileSync("./appendFileSync.txt", ` New Data appended at time ${Date.now()}\n`);

