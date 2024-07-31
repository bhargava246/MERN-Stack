 const fs = require('fs');
// console.log("read start");
//  //asynchronous way to read file
//  fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log('Error:',err);
//         return err;
//     }
//     console.log('Data: ',data.toString());
//     console.log("read end");
//     return data;
//  })
// console.log("Other Stuff");

//synchronous way to read file
// try{
// var data = fs.readFileSync('input.txt');
// console.log('Data:',data.toString());}
// catch(err){
//     console.error('error reading file',err);
// }

// console.log("other stuff");
// console.log("read end");

//read>open+read
// const buf = new Buffer(1024);

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log('err found',err);
//     }
//     console.log("file opened successfully");

//     fs.read(fd,buf,0,buf.length,4,function(err,bytes){
//         if(err){
//             console.log("error in reading",err);
//         }
//         console.log("data",bytes);
//         console.log('data',buf.slice(0,bytes).toString())
//         fs.close(fd,function(err){
//             if(err){
//                 console.log("there was error in closing file");
//             }
//             console.log("file closed successfully");
//         })
//     })
// })
   
//writing a file
// fs.writeFile('input.txt','PW SKILLS',function(err){
// if(err){
//     console.log("error in writing file");
// }    else{
//     console.log("success in writing file");
// }}
// )

//append to file

// fs.appendFile('input.txt','--Himanshu Bhargava','utf8',function(err){
//     if(err){console.log("error in appending file");
// }else{console.log("file appended successfully");}
// })

//deleting file
// fs.unlink('input.txt',function(err){
//     if(err){
//         console.log("error in deleting file");
//     } else {
//         console.log("success in deleting file");
//     }
// });