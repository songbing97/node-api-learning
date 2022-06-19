const net = require('net');

const BlockList = net.BlockList;

const blockList = new net.BlockList();

blockList.addAddress('1.2.3.4', 'ipv4');

blockList.addRange('1.2.3.7', '2.0.0.0');

blockList.addSubnet('123.2.3.8', 24);

console.log(blockList.check('1.230.3.3')); // true

console.log(blockList.check('123.230.3.3')); // false

console.log(blockList.rules);

console.log(blockList);