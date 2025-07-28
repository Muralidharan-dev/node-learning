const fs=require('fs')
const txt=fs.readFileSync('./text/input.txt','utf-8');
console.log(txt);
const textOut=`This is what we know about the avocado ${txt}.\n Created on ${Date.now()}`;
fs.writeFileSync('./text/output.txt',textOut);

