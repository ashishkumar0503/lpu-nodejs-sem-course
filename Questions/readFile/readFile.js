// 2. Create a nodejs application that should open and read from a filename 
// "dmo.txt", if file is empty then it should print on console that "File is empty" 
// otherwise content should be printed on the console

const fs = require('fs');

fs.readFile("../Questions/demo.txt", 'utf-8', (err, content) => {
    if (err) {
        throw err;
    }
    if (content === "") {
        console.log("File is empty");
    } else {
        console.log(content);
    }
});