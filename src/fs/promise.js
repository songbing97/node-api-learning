const fs = require('fs');

(async function() {
  try {
    await fs.promises.unlink('/ok.js'); // delete file
    console.log('successfully deleted /tmp/hello');
  } catch (err) {
    console.error(err);
  }  
})()

// (async function() {
//   try {
//     await fs.promises.unlink('/var/test.js'); // delete file
//     console.log('successfully deleted /var/test.js');
//   } catch (err) {
//     console.error(err);
//   }  
// })()