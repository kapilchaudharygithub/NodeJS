/** Require "fs" module for file Handling */

const fs = require("fs");
/** 1. Add new file with copied data of the file "readFileSync.txt" from the same current directory */
/**
 * copyFileSync: takes min-2 para's
 * 1. path1(./-->from )
 * 2. path2(./-->to)
 */
fs.cpSync("./readFileSync.txt", "./copyFileSync.txt");

/**
 * It creates new file if not present with that name and copy entire data of path1 file
 */
