// A)Write a JavaScript program using function to find out whether a number is a palindrome or not. 
// The console must display 'The number is a palindrome' if it is a palindrome otherwise it must display 
// 'The number is not a palindrome'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(num) {
  // Convert the input to a number
  num = parseInt(num);

  // in case of string
  // str = str.trim().toLowerCase();

  // Check if the input is a valid number
  if (isNaN(num)) {
    console.error("Error: Invalid input!");
    process.exit(1);
  }

  // Check if the number is a palindrome
  if (isPalindrome(num)) {
    console.log("The number is palindrome");
  } else {
    console.log("The number is not palindrome");
  }

  rl.close();
});

function isPalindrome(num) {
  // Convert the number to a string
  const str = num.toString();

  // Check if the string is the same forwards and backwards
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
