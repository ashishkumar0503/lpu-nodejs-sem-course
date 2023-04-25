var express = require('express');
var app = express();

// How to set and get cookie

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    // console.log('Cookies: ', req.cookies);
    // res.cookie('name', 'Ashish').send('Cookie Set');

    //Set cookie with expiry time and date

    //1. Set cookie with current expiry date
    //res.cookie('name', 'Ashish', {expire: 10000+Date.now()});
    
    //2. Set cookie with current expiry time
    res.cookie('name', 'Ashish', {maxAge: 10000});
    res.send('Cookie Set');
});

// Clear Cookie
app.get('/clear', (req, res) => {
    res.clearCookie('name');
    res.send('Cookie are cleared');
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
});
