const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(
        { id: 1, course: "Node js"},
    );

    // res.json({
    //     name: "Ashish Kumar",
    //     reg: 12008756,
    //     course: "Node js",
    // });
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
});