const path = require('path')
const os = require('os')
const process = require('process')


//print out current working directory
console.log("Current directory:", process.cwd());


//printing the seperator of a given path
console.log("Seperator:", path.sep);

//printing extention name of a file path
console.log("Extention name:", path.extname(__filename));

//printing process id of current running process
console.log("Process id:", process.pid);

//printing user information of the os
console.log("User info:", os.userInfo());


//printing os.platform
console.log("Platform:", os.platform());











