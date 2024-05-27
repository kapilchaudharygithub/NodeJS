/** Require "fs" module for file Handling */

const fs = require("fs");

/**
 * mkdirSync: takes file path as para
 */
/** It creates 1 */
// fs.mkdir("./mkdirASync", (error) => {
//   if (error) {
//     console.log("Something went wrong");
//     console.log(error);
//   } else {
//     console.log("Folder created successfullt");
//   }
// });

/** Want to create multiple nested at once */

fs.mkdir("./mkdirAssync/a/b/c", { recursive: true }, (error) => {
  if (error) {
    console.log("Something went wrong");
    console.log(error);
  } else {
    console.log("Folder created successfully");
  }
});
