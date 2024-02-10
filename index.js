const express = require('express')
const app = express()
const port = 5000

const fs = require('fs')

// // sync
fs.writeFileSync('abc.txt','This is 1st content')
let d1 = fs.readFileSync('abc.txt','utf-8')
console.log("D1 =",d1);

fs.writeFileSync('abc.txt','This is 2nd content')
let d2 = fs.readFileSync('abc.txt','utf-8')
console.log("D2 =",d2);

// Async
fs.writeFile('abc.txt','This is the 1st written',(err)=>{
    if(err){
        console.log("Err =",err);
    }
    else{
        console.log("This is the 1st data");
    }
})
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Err =",err);
    }
    else{
        console.log("D1 =",data);
    }
})

fs.writeFile('abc.txt','This is the 2nd written',(err)=>{
    if(err){
        console.log("Err =",err);
    }
    else{
        console.log("This is the 2nd data");
    }
})
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Err =",err);
    }
    else{
        console.log("D2 =",data);
    }
})

app.listen(port,(err)=>{
    if(err){
        console.log("Error Occured",err);
    }
    else{
        console.log("Server is running");
    }
})
