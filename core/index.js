const express = require('express')
const path = require('path');
const fs = require('fs');

const babylon = require('@babel/parser')

const app  = express()

// const fsPath = path.resolve(__dirname+'/1.text')
const fsPath = path.resolve('demo/index.html')


const content = fs.readFileSync(fsPath,"utf8")


console.log(content)
// const ast = babylon.parse(content, {
// 		sourceType: "module",
// })

// console.log(ast)


// app.get('/',(req,res)=> {
// 	res.send('ok')
// })

// app.listen(3000,()=> {
// 	console.log('run in 3000')
// })