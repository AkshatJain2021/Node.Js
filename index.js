const http=require('http')
const fs=require('fs')
// const textIn=fs.readFileSync('./1-node-farm/starter/txt/input.txt','utf-8')
// console.log(textIn)
// const textOut=`${textIn}.\n Modified by user`
// console.log(textOut)
// fs.writeFileSync('./1-node-farm/starter/txt/output.txt',textOut);
// fs.readFile('./1-node-farm/starter/txt/input.txt','utf-8',(err,data)=>{
//     console.log(data)
// })
// console.log("Reading file...")
// fs.readFile('./1-node-farm/starter/txt/start.txt','utf-8',(err,data)=>{
//     console.log(data)
//     fs.readFile(`./1-node-farm/starter/txt/${data}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./1-node-farm/starter/txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile(`./1-node-farm/starter/txt/outputfinal.txt`,`${data}+${data2}+${data3}`,err=>{
//                 console.log("file saved")
//             })
//         })
//     })
// })
// const server=http.createServer((req,res)=>{
//     res.end("Hello from server");
// })
// server.listen(3000,'127.0.0.1',()=>{
//     console.log("Listening")
// })
// const read=fs.readFileSync('./1-node-farm/starter/txt/input.txt','utf-8')
// console.log(read)
// console.log("Reading")
const read2=fs.readFile('./1-node-farm/starter/txt/input.txt','utf-8',(data,err)=>{
    console.log(err)
})
console.log("Reading")