var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({secret: "My Secret Here"}));

// app.get('/', (req, res) => {
//     req.session.username = "Ashish";
//     res.send("Session are set");
// });

// app.get('/get-session', (req, res) => {
//     res.send("Your session username is: " + req.session.username)
// });

//2. Counter application using session

app.get('/', (req, res) => {
    if (req.session.user_visit) {
        req.session.user_visit++;
        res.send('You visited this page ' + req.session.user_visit + ' times');
    } else {
        req.session.user_visit = 1;
        res.send('Hi, your are visiting this page first time');
    }
});

app.get('/clear', (req, res) => {
    res.session = null;
    res.send('Session cleared')
})

app.listen(8000, () => {
    console.log('Listening to post 8000');
});