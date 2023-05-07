// Implement an express application for the following 
// a) Accept a number from the input text field of a user web page and perform the basic arithmetic operations, 
// increment (++), decrement (--), and square, on the number inside a middleware function of server nodejs application
// b) Display the output value as a reponse to the button click event from the user page

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/operation.html`)
});


function arithmeticMiddleware(req, res, next){
    let a = parseInt(req.body.num);
    if (isNaN(a)) {
        res.send('Input must be a valid integer');
    }
    switch (req.body.operation) {
        case "increment":
            result = a + 1;
            break;
        case "decrement":
            result = a - 1;
            break;
        case "square":
            result = a * a;
            break;
            default:
            res.send('Invalid Operation');
        }
        
        res.locals.result = result;
        
        next();
    };
    
app.post('/arithmetic', arithmeticMiddleware, (req, res) => {
    const result = res.locals.result;
    res.send(`The result is ${result}`);
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
});