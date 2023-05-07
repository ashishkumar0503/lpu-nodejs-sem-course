// Create an express application for the following scenarios:
// 1. Create a text file and add student information (Reg. No, Name, Grade) 
// in the server system.
// 2. Accept a filename from the input text of a user web page and transfer 
// the request file using download() function from the server as a response to the 
// button click event from the user web page.

const fs = require('fs');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <form action="/students" method="post">
                <input type="text" name="regNo" placeholder="Enter Reg. No" ><br><br>
                <input type="text" name="name" placeholder="Enter Name" ><br><br>
                <input type="text" name="grade" placeholder="Enter Grade" ><br><br>
                <button>Send File</button><br><br>
            </form> 
            <form action="/download" method="get">
                <input type="text" name="filename" placeholder="Enter file name" ><br><br>
                <button>Download File</button>
            </form> 
        </body>
        </html>
    `)
})

app.post('/students', (req, res) => {
    const regNo = req.body.regNo;
    const name = req.body.name;
    const grade = req.body.grade;

    const info = `Reg.No: ${regNo}\nName: ${name}\nGrade: ${grade}\n`;

    fs.writeFile('../ques9/file.txt', info, (err) => {
        if (err) {
            console.error(err);
            res.send('Error adding student information to File');
        } else {
            res.send('Student information added to file');
        }
    })
    
});

app.get('/download', (req, res) => {
    const filename = req.query.filename;
    res.download(`../ques9/${filename}`)
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
});