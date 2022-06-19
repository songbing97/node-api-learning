const os = require('os');

console.log(JSON.stringify(os.EOL)); // POSIX: '\n', Windows: '\r\n'

console.log(os.arch()); // return cpu archit, like 'arm' 'x86' 'x64'
console.log(process.arch); // same as last line

// console.log(os.constants); // constants of system

console.log(os.homedir()); // user home directory
console.log(os.hostname()); // computer name
console.log(os.tmpdir()); // temporary directory

console.log(os.type()); // system name, windows: 'Windows_NT', macOS: 'darwin', linux: 'Linux'
console.log(os.version()); // system version details
console.log(os.release()); // release version

console.log(os.totalmem()); // total memory of machine
console.log(os.uptime()); // times from last startup to now
