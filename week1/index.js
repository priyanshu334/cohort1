const express = require('express')
const app = express()

const PORT = 3000

app.get('/',async (req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.listen(PORT,()=>{
    console.log("listning at port")
})