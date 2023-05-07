// B)Create a form having text boxes and a submit button. 
// On the click of the submit button, the values entered in the form should be printed on the web page. 
// Use HTTP module for this task.

const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // collect the data from the form
        req.on('data', (data) => {
            body += data;
        });

        // when the form data is complete, process it
        req.on('end', () => {
            const formData = qs.parse(body);

            // create a string with the form data
            const outputStr = `Name: ${formData.name}<br>Email: ${formData.email}<br>`

            // send the response with the form data
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<!DOCTYPE html>
            <html>
              <head>
                <title>Form Example</title>
              </head>
              <body>
                <h1>Form Example</h1>
                ${outputStr}
              </body>
            </html>`)
        });
    } else {
        // send the form to the client
        res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<!DOCTYPE html>
      <html>
        <head>
          <title>Form Example</title>
        </head>
        <body>
          <h1>Form Example</h1>
          <form method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>`);
    }
});

server.listen(8000, () => {
    console.log('Listening to port 8000');
});