const path = require('path');

console.log(path.dirname('../ques1.js'));
console.log(path.basename('../ques1.js'));
console.log(path.extname('../ques1.js'));

// zlib

//Compress
const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const inp = fs.createReadStream("../ques1/abc.txt");
const out = fs.createWriteStream("../ques1/abc.txt.gz");
inp.pipe(gzip).pipe(out);

// Decompress
// const unzip = zlib.createUnzip();

// const inp1 = fs.createReadStream("../ques1/abc.txt.gz");
// const out1 = fs.createWriteStream("../ques1/abc.txt");
// inp1.pipe(unzip).pipe(out1);