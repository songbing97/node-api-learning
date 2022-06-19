const net = require('net');

// util functions
console.log(net.isIP('1.1.1.1')) //4
console.log(net.isIP('::6')) // 6
console.log(net.isIP('1.12.2.3/24')) // 0

console.log(net.isIPv4('1.1.1.1')) // true
console.log(net.isIPv4('::6')) // false
console.log(net.isIPv4('1.12.2.3/24')) // false

console.log(net.isIPv6('1.1.1.1')) // false
console.log(net.isIPv6('::6')) // true
console.log(net.isIPv6('1.12.2.3/24')) // false