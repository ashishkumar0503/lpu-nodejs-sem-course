//OS properties and methods

const os = require('os');

//-----------------Methods in OS-------------------------------------------------

//1. arch() : Returns the OS CPU architecture
console.log(os.arch());


//2. freemem() : Returns the amount of free system memory(RAM) in bytes as an integer
const memory = os.freemem();
console.log(`Free memory in KB: ${Math.round(memory/1024)}`);
console.log(`Free memory in MB: ${Math.round(memory/1024/1024)}`);
console.log(`Free memory in GB: ${Math.round(memory/1024/1024/1024)}`);

//3. totalmem() : Returns the number of total memory of the system(RAM) in bytes as an integer
const totMemory = os.totalmem();
console.log(`Total memory in KB: ${Math.round(totMemory/1024)}`);
console.log(`Total memory in MB: ${Math.round(totMemory/1024/1024)}`);
console.log(`Total memory in GB: ${Math.round(totMemory/1024/1024/1024)}`);

//4. hostname() : Returns the hostname of the OS
console.log(os.hostname());

//5. release() : Returns information about the OS release(version)
console.log(os.release());

//6. tmpdir() : Returns the OS default directory for temporary files
console.log(os.tmpdir());

//7. type()  : Returns the name of the OS
console.log(os.type());

//8. uptime() : Returns the uptime of the OS, in seconds. This method returns an integer value that specifies the no of sec the system is running
console.log(os.uptime());

//9. userInfo() : Returns information about the current user
console.log(os.userInfo());

//10. version() : Returns version of OS
console.log(os.version());

//11. cpus() : Returns an array containing information about the computer's CPU 
console.log(os.cpus());

//----------------Properties in OS Module-----------------------------

//12. constants : Returns an object that contains OS specified constants. Ex: error codes, signal constants, priority constants, etc.
console.log(os.constants);

//a. signal constant
console.log(os.constants.signals);

//b. priority constant
console.log(os.constants.priority);

//c. error constant
console.log(os.constants.errno);

