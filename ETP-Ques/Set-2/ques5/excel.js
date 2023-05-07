const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Express Form to Excel</title>
      </head>
      <body>
        <h1>Enter Form Data</h1>
        <form method="POST" action="/excel">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"><br><br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"><br><br>
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone"><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Handle form submission
app.post('/excel', (req, res) => {
  // Extract form data from request body
  const { name, email, phone } = req.body;

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([{ Name: name, Email: email, Phone: phone }]);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

  // Write workbook to file
  XLSX.writeFile(workbook, '../ques5/data.xlsx');

  // Send success response
  res.send('Data saved to Excel file');
});

// Start the server
app.listen(8000, () => {
  console.log('Listening to port 8000');
});
