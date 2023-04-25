const fs = require('fs');

//Asynchronous File System Module

//1. Create a file

fs.writeFile('../fsModule/txt/file2.txt', 'This is asynchronous file system module', (err) => {
    if(err){
        console.log(err);
    }
    console.log("File has been created");
});

//2. Append data to file

fs.appendFile('../fsModule/txt/file2.txt', '\nAppended to the file', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("Task completed of appending data");
});

//3. Read data from a file

fs.readFile('../fsModule/txt/file2.txt', 'utf-8', (err, content) => {
    if(err) throw err;
    console.log(content.toString());
});

//4. Rename a file

fs.rename('../fsModule/txt/file2.txt', './txt/fileAsync.txt', (err) => {
    if(err) throw err;
    console.log("Rename of file completed");
}); 