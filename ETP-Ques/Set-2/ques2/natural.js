// Q2 B)Create a node js application that takes a number 'n' as a user input and calculates the 
// sum of n natural numbers and stores the result in a file "result.txt" which already exists. 
// Also, "Success" message gets printed on console in case of success and "Error occurred" gets displayed on console if 
// any error occurs.

// const fs = require('fs');
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question('Enter a number: ', function(n) {
//     n = parseInt(n);

//     if (isNaN(n)) {
//         console.error('Error: Invalid input');
//         process.exit(1);
//     }

//     let sum = 0;
//     for(let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     fs.writeFile('../ques2/result.txt', sum.toString(), function(err) {
//         if (err) {
//             console.error("Error occurred");
//             process.exit(1);
//         }
//         console.log("Success");
//         r1.close();
//     });
// });

// r1.on('close', function() {
//     process.exit(0);
// });

const http = require('http');
const fs = require('fs');
const server = http.createServer();

function sum(number) {
    let mySum = 0;
    for(let i = 1; i <= number; i++) {
        mySum += i;
    }
    return mySum;
}

server.on('request', (req, res) => {
    if (req.method === "GET") {
        fs.readFile('../ques2/natu.html', 'utf-8', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else if(req.method === 'POST') {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const query = params.get('num');
            const number = parseInt(query);
            const result = sum(number);
            fs.writeFile('../ques2/result.txt', result.toString(), (err) => {
                if (err) throw err;
                res.end(result.toString());
            })
        })
    }
})

server.listen(8000, () => {
    console.log('Listening to port 8000');
});