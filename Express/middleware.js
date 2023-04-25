const express = require('express');
const app = express();

//1.
// app.get('/', (req, res, next) => {
//         console.log('Hello');
//         next();
//     },
//     (req, res) => {
//         res.send(`<div>
//                 <h2>Middleware</h2>
//                 <h3>hello</h3>
//             </div>
//         `)
//     }

// );

//2.
// var myLogger = (req, res, next) => {
//     console.log('LOGGED');
//     next();
// }

// app.use(myLogger);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

//3.
//Creating middleware
// app.use(function (req, res, next) {
//     console.log('A new request recieved at ' + Date.now());  
//     next();  
// })

// app.get('/users', (req, res) => {
//     res.send('Hello User');
// });

//4. Third Party Middleware

// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// 5. Age Checker using middleware
app.use('/:age', function (req, res, next) {
    if (req.params.age < 18) {
        res.redirect('/fail');
    }
    next();
});

app.get('/fail', (req, res) => {
    res.send('Your age is low so you cant access to this site');
})

app.get('/:age', (req, res) => {
    res.send('Your age is ' + req.params.age)
});


app.listen(8000, (req, res) => {
    console.log('Listening to port 8000');
})