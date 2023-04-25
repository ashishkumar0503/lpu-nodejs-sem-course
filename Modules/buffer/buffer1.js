const fs = require('fs');
// Buffer modules provides a way of handling streams of binary data

//Creating Buffers

//1. Creates a zero-filled Buffer of length 10
const buf1 = Buffer.alloc(10);
console.log(buf1);

//2. Creates a Buffer of length 10, filled with bytes which all have the value
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

//3. Creates an uninitialized buffer of length 10
// This is faster than calling Buffer.alloc() but the returned Buffer
// instance might contain old data that needs to be overwritten using fill(), write(), or other functions that fill the Buffer's contents
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

//4. Creates a Buffer containing the bytes [1, 2, 3]
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

//5. Creates a Buffer containing the UTF-8-encoded bytes for the string 'test'
const buf5 = Buffer.from('test');
console.log(buf5);
console.log(buf5.toString('utf16le'));


/*
var buf1 = Buffer.from('ABCD');
var buf2 = Buffer.from('ABCD');
var res = buf1.copy(buf2);
if(res === 0) {
    console.log(buf1 + " is equal to " + buf2);
} else {
    console.log(buf1 + " is not equal to " + buf2);  // ABCD is not equal to ABCD
}
*/
