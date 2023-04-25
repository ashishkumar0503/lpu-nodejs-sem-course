const path = require('path');

//1. path.dirname('path') : Returns the directory name of a path
console.log(path.dirname('./Modules/pathModule/path1.js'));

//2. path.extname('path') : Returns the extension of the file in that particular path
console.log(path.extname('./Modules/pathModule/path1.js'));

//3. path.basename('path') : Returns the last part of the path
console.log(path.basename('./Modules/pathModule/path1.js'));

//4. path.parse('path') : Formats a path string into a path object
console.log(path.parse('./Modules/pathModule/path1.js'));

//5. Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
// If the given {path} is a zero-length string, false will be returned.
console.log(path.isAbsolute('path1.js'));

