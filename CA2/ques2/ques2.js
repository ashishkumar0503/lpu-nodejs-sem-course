const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('../ques2/data.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        res.send(jsonData);
    });
});


app.listen(8000, () => {
    console.log('Listening to port 8000');
});