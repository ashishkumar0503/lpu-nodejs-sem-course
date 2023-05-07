const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);

  const op = req.query.op;
  let result;

  switch (op) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
      break;
  }

  res.send(result.toString());
});

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="get">
      <label for="num1">First number:</label>
      <input type="number" name="num1" id="num1">
      <br>
      <label for="num2">Second number:</label>
      <input type="number" name="num2" id="num2">
      <br>
      <input type="radio" name="op" value="add" checked> Add
      <input type="radio" name="op" value="subtract"> Subtract
      <input type="radio" name="op" value="multiply"> Multiply
      <input type="radio" name="op" value="divide"> Divide
      <br><br>
      <button type="submit">Calculate</button>
    </form>
  `);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
