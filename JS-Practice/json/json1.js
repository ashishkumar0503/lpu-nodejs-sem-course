const fs = require('fs');

const emp = {
    fName : "Ashish",
    lName : "Kumar",
    age : 21,
}

const jsonData = JSON.stringify(emp);
console.log(jsonData);

fs.writeFile("file1.json", jsonData, (err) => {
    if(err) throw err;

    //It will go under infinite loop
    // Use nodemon then it will go in infinite loop
    console.log("File created");
});

fs.readFile("file1.json", 'utf-8', (err, content) => {
    if(err) throw err;
    console.log(content);

    const obj = JSON.parse(content);
    console.log(obj);
});



