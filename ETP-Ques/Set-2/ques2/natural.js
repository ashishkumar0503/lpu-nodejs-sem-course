const fs = require('fs');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number: ', function(n) {
    n = parseInt(n);

    if (isNaN(n)) {
        console.error('Error: Invalid input');
        process.exit(1);
    }

    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    fs.writeFile('../ques2/result.txt', sum.toString(), function(err) {
        if (err) {
            console.error("Error occurred");
            process.exit(1);
        }
        console.log("Success");
        r1.close();
    });
});

r1.on('close', function() {
    process.exit(0);
});
