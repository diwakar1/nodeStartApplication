const fs = require('fs');
const path = require('path');
//create a folder
// fs.mkdir(path.join(__dirname,'/test'),{},err =>{
//     if(err) throw err;
//     console.log('folder created');
// });
//create a file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',err =>{
//     if(err) throw err;
//     console.log('file created ');
// });
//read a file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

//rename a file
fs.rename(path.join(__dirname,'/test','hello.txt'),
          path.join(__dirname,'/test','helloWorld.txt'),err =>{
        if(err) throw err;
        console.log('file name changed...');
    });