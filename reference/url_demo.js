const url = require('url');
const myUrl = new URL('http://newwebsite.com/hello.html?id=100&status=active');
//serialized url
console.log(myUrl.toString());
//host(root domain)
console.log(myUrl.host);
//host does not get port
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname)
//serialized query
console.log(myUrl.search);
//param object
console.log(myUrl.searchParams);
//add param 
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
//loop
myUrl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));
