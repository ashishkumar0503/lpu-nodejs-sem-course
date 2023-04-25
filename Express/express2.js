// Create a nodejs application to make http request to
// open a feedback form which contains the following fields-
// Name, contact number as text fields, feedback as text area and a submit button.
// On submission, Thankyou for your feedback message should be displayed in a popup box

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile("../Express/feed.html", 'utf-8', (err, content) => {
        if(err) throw err;
        res.end(content);
    });
});

server.listen(2000, () => {
    console.log("Listening to port 2000");
});