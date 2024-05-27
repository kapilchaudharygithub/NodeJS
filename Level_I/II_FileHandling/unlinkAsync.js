/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1.Remove file  */
/**
 * unlink: takes file path as para and a callback
 */
fs.unlink("./unlinkSync.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File deleted successfully");
  }
});
