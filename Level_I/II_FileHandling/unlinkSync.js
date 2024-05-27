
/** Require "fs" module for file Handling */

const fs = require("fs");

/**
 * unlinkSync: takes file path as para
 */
fs.unlinkSync("./unlinkAsync.txt");
