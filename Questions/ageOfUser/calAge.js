// Implement an express application to perform the following operations
// (a) Add two textboxes in the client page to accept the current year and date of birth and calculate the age of the user
// (b) Add a button in the client page and provide the output value as response with click event

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/age.html`);
});

app.post('/age', (req, res) => {
    const year = req.body.year;
    const dob = req.body.date;
    const age = year - dob;
    if (age <= 0) {
        res.send('Invalid Age')
    } else {
        res.send(`Your age is: ${age}`)
    }
});

app.listen(1000, () => {
    console.log('Listening to port 1000');
});