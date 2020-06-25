// const Person = require('./person');
// const person = new Person('sudha',30);
// console.log(person.greeting());

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message',data=>console.log('called listener',data));
// logger.log('Hello how you doing');

const http = require('http');
const path = require('path');
const fs = require('fs');
/*
//create server
 const server = http.createServer((req,res)=>{
   //console.log(req.url);
   if(req.url === '/'){
      // res.writeHead(200,{'Content-Type':'text/html'})
      // res.end('<h1>Home</h1>');
      fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
          if(err) throw err;
          res.writeHead(200,{'Content-Type':'text/html'});
          res.end(content)
      })
   }
   if(req.url ==='/about'){
    fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(content)
    })
 }
 if(req.url === '/api/users'){
     const users = [
         {
             name:'Bob Smith',
             age:40
         },
         {
             name:'Jon Doe',
             age:30
         }
     ];
     res.writeHead(200,{'Content-Type':'application/json'});
     res.end(JSON.stringify(users));
 }
*/
const server = http.createServer((req,res)=>{
//build file path
 let filePath = path.join(__dirname,'public',req.url=='/'?'index.html':req.url);
 
 //extention of path

 let extname = path.extname(filePath);

 //initial content type
 let contentType = '';
 //check ext and set content
 switch(extname){
     case '.js':
         contentType= 'text/javascript';
         break;
    case '.css':
        contentType = "text/css";
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
    
 }
 console.log(contentType);
//Read File
 fs.readFile(filePath,(err,content)=>{
     if(err){
         if(err.code == 'ENOENT'){
             //page not found
             fs.readFile(path.join(__dirname,'public','404.html'),
             (err,content)=>{
                 res.writeHead(200, {'Content-Type':'text/html'});
                 res.end(content,'utf8');
             })
         }else{
             //server error
             res.writeHead(500);
             res.end(`server Error ${err.code}`);
           
         }
     }else{
         //success
         res.writeHead(200,{'Content-Type':contentType})
         res.end(content,'utf8');
     }
 });
 
}) ;


const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));