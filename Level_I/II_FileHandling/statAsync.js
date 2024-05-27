/** Require "fs" module for file Handling */

const { error } = require("console");
const fs = require("fs");

/**
 * statS: takes file path as para and a callback
 */
fs.stat("./writeFileAsync.txt", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
