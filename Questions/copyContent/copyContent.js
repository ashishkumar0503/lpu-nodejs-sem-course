// 3. Create a nodejs application which opens a file "demo.txt" and copies the content into anotehr file "copy.txt". 
// Also delete the old file after copying.

const fs = require('fs');

var output;

//var output = fs.readFileSync("../Questions/file.txt", 'utf-8') ;
//fs.writeFileSync("../Questions/copy.txt", output);

fs.readFile("../Questions/file.txt", 'utf-8', (err, content) => {
    if (err) throw err;
    output = content;
    fs.writeFile("../Questions/copy.txt", output, (err, content) => {
        if (err) throw err;
        console.log("File Content copied");
    });
});
// To delete that old file
// fs.unlink("../Questions/file.txt", (err, content) => {
//     if (err) throw err;
// });
