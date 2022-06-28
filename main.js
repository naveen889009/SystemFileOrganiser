#!/usr/bin/env node
//it will take input from string 2 means store in arrat from input 2
let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
let helpobj = require("./commands/help");
let organiseobj = require("./commands/organise");
let treeobj = require("./commands/tree");

//console.log(inputArr);


// input will be given like this {
//node main.js tree "directoryPath"
//node main.js Oraganise "directoryPath"
//node main.js help
// }


// fitst index input command after node.js
let command = inputArr[0];

//types of files

let types = {
    media : ["mp4" , "mkv"],
    photos : ['jpg' , 'jpeg'],
    archives : ['zip' , '7z' , 'rar'],
    documents : ['docs' , 'doc' , 'pdf' , 'txt'],
    app : ['dmg' , 'exe' , 'pkg' ,'deb']

}



// switch case for that command which command to execute
switch(command){
case "tree" :
treeobj.treekey(inputArr[1]);
break;

case "organise" :
organiseobj.organisekey(inputArr[1])
break;

case "help" :
helpobj.helpkey();
break;

default :
console.log("Please Input Right Word");
break;
                    
}


//functions 

