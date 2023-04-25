// Create a payment gateway with foloowing fields.
// 1. Name 2. Card 3. CVV and a submit button
// When user clicks on submit button a confirmation box appears.
// When click on okay message 'Successful' when click on cancel message 'Denied'.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <form action='/payment' method='post'>
                <input type="text" name="name" placeholder="Enter name" required /><br/><br/>
                <input type="number" name="no" placeholder="Enter card no" required /><br/><br/>
                <input type="number" name="cvv" placeholder="Enter CVV no" required /><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `)
});

app.post('/payment', (req, res) => {
    res.send(`
        <html>
        <body>
            <p id="demo"></p>
            <script>
                const cnfm = confirm('Do you want to do payment?');

                if(cnfm) {
                    document.getElementById('demo').innerText = 'Successfull';
                } else {
                    document.getElementById('demo').innerText = 'Denied';
                }
            </script>
        </body>
        </html>
    `)
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
});