/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Read file "readFileSync.txt" from the same current directory */
/**
 * readFileSync: takes min-2 para's
 * 1. name and path(./-->in the current directory)
 * 2. file type
 */
fs.readFile("./readFileSync.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("File not readed properly due to: ", error);
  } else {
    console.log(data);
  }
});

// console.log(result);
