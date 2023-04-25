// Node.js ZLIB Module compress a file "text.txt" into "test.txt.gz"

//Compress a file
/*
const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const inp = fs.createReadStream("test.txt");
const out = fs.createWriteStream("test.txt.gz");
inp.pipe(gzip).pipe(out);
*/

//Decompress a file
const zlib = require('zlib');
const unzip = zlib.createUnzip();
const fs = require('fs');

const inp = fs.createReadStream("test.txt.gz");
const out = fs.createWriteStream("test.txt");
inp.pipe(unzip).pipe(out);