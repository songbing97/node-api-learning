const net = require('net');


const Server = net.Server;
/**
 * extend class EventEmitter
 * same as createServer
 * @param {Object} options
 * @param {Object} options.allowHalfOpen 
 * false: 可读端结束，socket自动结束可写端 
 * true: 发送结束信号时，只有当服务器显示地发送socket.end，才会结束传输
 * @param {Function} 自动设置为connection的监听器
 **/
const server = new Server(
  {
    allowHalfOpen: true,
    keepAlive: true,
    noDelay: true,
  },
  c => {
    console.log(c);
  }
);

server.on('error', error => {
  console.log(error);
})

server.on('close', () => {
  console.log('close');
})

server.listen(8100, () => {
  console.log('listening on')
})