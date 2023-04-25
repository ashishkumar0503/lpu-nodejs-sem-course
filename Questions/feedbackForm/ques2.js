const express = require('express');
const app = express();
var alert = require('alert');

app.get('/feedback', (req, res) => {
    res.sendFile(`${__dirname}/feedback.html`);
    alert(`Name is: ${req.query.name}`);
    alert(`Contact is: ${req.query.contact}`);
    alert(`Feedback is: ${req.query.feedback}`);
});

app.listen(2000, () => {
    console.log("Listening to port 2000");
});

// app.get('/form-submit', (req, res) => {
//     res.send(req.query);
// });

// const bodyParser = require('body-parser') // inorder to get data from a file using post method
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/form-submit', (req, res) => {
//     res.send(req.body);
// });

