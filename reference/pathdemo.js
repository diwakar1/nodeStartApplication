const path = require('path');
//basefile name
console.log(path.basename(__filename));
//dir name
console.log(path.dirname(__filename));
//file extention
console.log(path.extname(__filename));
//create object
console.log(path.parse(__filename));
//concatenate paths
console.log(path.join(__dirname,'test','hello.html'))
