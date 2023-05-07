// Create an express application with the following requirements 
// a) Set and clear the cookies for a client using the cookie-parser module in the server application. 
// b) Display the cookie information on the client web page with a click on the show button and clear the cookie 
// information from the system with a click on the reset button on the user web page

var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <form action="/set" method="post" >
                <label for="fname">First Name: </label>
                <input type="text" name="fname"><br/>
                <label for="lname">Last Name: </label>
                <input type="text" name="lname"><br/><br/>
                <button type="submit" name="setCookie">Set Cookie</button>
            </form>
            <form action="/get" method="post" >
                <button type="submit" name="getCookie">Get Cookie</button>
            </form>
            <form action="/delete" method="post" >
            <button type="submit" name="getCookie">Clear Cookie</button>
            <button type="submit" name="getCookie">Reset Cookie</button>
        </form>
        </body>
        </html>
    `)
});

app.post('/set', (req, res) => {
    const cookieFirst = req.body.fname;
    const cookieLast = req.body.lname;
    res.cookie('data', ({
        first_name: cookieFirst,
        last_name: cookieLast,
    }), {maxAge: 10000});
    // res.cookie('first_name', cookieFirst);
    // res.cookie('last_name', cookieLast);
    res.send('Set Successfully');
});

app.post('/get', (req, res) => {
    res.send((req.cookies));
});

app.post('/delete', (req, res) => {
    res.clearCookie('data');
    res.send('Deleted Successfully')
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
})