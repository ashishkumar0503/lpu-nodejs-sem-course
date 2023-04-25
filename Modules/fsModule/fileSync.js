const fs = require('fs');

//Synchronous File System Module

//1. Create a file
fs.writeFileSync('../fsModule/txt/file1.txt', `File created at ${Date()}`);

//2. Add data to file
fs.appendFileSync('../fsModule/txt/file1.txt', '\nAppended to the file');

//3. Read data from a file

//a. Method 1 to read data
const data = fs.readFileSync('../fsModule/txt/file1.txt'); 
console.log(data);  // It will store data in a buffer format, so convert it into string using toString();
console.log(data.toString());

//b. Method 2 to read data
const fileOut = fs.readFileSync('../fsModule/txt/file1.txt', 'utf-8');
console.log(fileOut);

//4. Rename a file
fs.renameSync('./txt/file1.txt', './txt/fileSync.txt');