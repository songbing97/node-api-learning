const net = require('net');

const SocketAddress = net.SocketAddress;

// const socketAddress = new SocketAddress(); // default: { address: '127.0.0.1', port: 0, family: 'ipv4', flowlabel: 0 }
const socketAddress = new SocketAddress({
  address: '189.0.0.1',
  port: 8080,
  family: 'ipv4', // default: 'ipv4'
  // flowlabel: 0 // a IPv6 flow-label
});

console.log(socketAddress);

console.log(socketAddress.address);
console.log(socketAddress.port);
console.log(socketAddress.family);
console.log(socketAddress.flowlabel);