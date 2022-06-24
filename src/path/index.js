const path = require('path')

console.log(path.basename('C:\\temp\\myfile.html')) // windows: myfile.html, posix: C:\\temp\\myfile.html

console.log(path.posix.basename('/tmp/myfile.html', 'html')) // windows\posix: myfile

console.log(path.delimiter) // windows: ; posix: :

// console.log(process.env.PATH.split(path.delimiter));
// [
//   '/opt/homebrew/bin',
//   '/opt/homebrew/sbin',
//   '/usr/local/bin',
//   '/usr/bin',
//   '/bin',
//   '/usr/sbin',
//   '/sbin',
//   '/opt/homebrew/bin',
//   '/opt/homebrew/sbin'
// ]

console.log(path.dirname('/foo/bar/baz/asdf/quux')); // return the directory name /foo/bar/baz/asdf

console.log(path.extname('ok/test.js')); // return '.js'

console.log(path.isAbsolute('/opt')) // true
console.log(path.isAbsolute('opt')) // false
console.log(path.isAbsolute('C:\\foo\\..')); // windows -> true

console.log(path.join('/opt', 'dir', 'ok.js')); // concat some path to one path

console.log(path.normalize('/opt//fd//.')) // return a standard path


console.log(path.format({
  root: '/',
  dir: '/good', // dir will ignore root
  // base: 'ok', // base will ignore ext
  name: 'ok',
  ext: '.exe'
}))
console.log(path.parse('/opt/dir/telephone.js')); // return a object of description

console.log(path.relative('/opt/jk', '/opt/ok')); // return relative path

console.log(path.resolve('/opt', '/dir')); // return final path
console.log(path.resolve('/opt', '~dir'));

console.log(path.resolve('dir', '/opt', './index.js'));

console.log(path.sep);