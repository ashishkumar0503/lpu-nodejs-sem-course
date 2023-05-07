// Create an express application with the following requirements 
// a) Accept Student Name, Reg. no., Roll. No., Mobile No. and Mail Id from the input text fields of a 
// client page and perform a chain of validations on the data using the express-validator module in the server application. 
// b) Check all the fields are not empty, minimum and maximum lengths of data. 
// C) Add a submit button on the client web page to submit the data and display the warning messages if required.

const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Student Registration Form</h1>
        <form method="POST" action="/submit">
          <div>
            <label for="name">Name:</label>
            <input type="text" name="name" id="name">
          </div>
          <div>
            <label for="regno">Reg No:</label>
            <input type="text" name="regno" id="regno">
          </div>
          <div>
            <label for="rollno">Roll No:</label>
            <input type="text" name="rollno" id="rollno">
          </div>
          <div>
            <label for="mobile">Mobile:</label>
            <input type="text" name="mobile" id="mobile">
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="text" name="email" id="email">
          </div>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

app.post(
  "/submit",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3, max: 50 })
      .withMessage("Name must be between 3 and 50 characters"),
    body("regno")
      .notEmpty()
      .withMessage("Reg No is required")
      .isLength({ min: 5, max: 10 })
      .withMessage("Reg No must be between 5 and 10 characters"),
    body("rollno")
      .notEmpty()
      .withMessage("Roll No is required")
      .isLength({ min: 3, max: 20 })
      .withMessage("Roll No must be between 3 and 20 characters"),
    body("mobile")
      .notEmpty()
      .withMessage("Mobile No is required")
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile No must be 10 digits"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email must be a valid email address"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Process the student registration here
    const { name, regno, rollno, mobile, email } = req.body;
    res.send(`
      <html>
        <body>
          <h1>Student Registration Successful</h1>
          <p>Name: ${name}</p>
          <p>Reg No: ${regno}</p>
          <p>Roll No: ${rollno}</p>
          <p>Mobile: ${mobile}</p>
          <p>Email: ${email}</p>
        </body>
      </html>
    `);
  }
);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
