/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Create new file ASync with some text */
/**
 * writeFileSync: takes min-3 para's
 * 1. name and path(./-->in the current directory)
 * 2. Data
 * 3. callback for error handling
 */
fs.writeFile(
  "./writeFileAsync.txt",
  "Hey there , I am created by write file method of fs Asynchronously",
  (error, data) => {
    if (error) {
      console.log("File not created: ", error);
    } else {
      console.log("File Created Successfully");
    }
  }
);
/**
 * Whenver the function is calling it replace new new text in the file if something is already there
 */
