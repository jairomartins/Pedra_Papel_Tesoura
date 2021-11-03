const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Online!')
})

app.listen( port,()=>{
    console.log(`Online em http://localhost:${port}`)
})