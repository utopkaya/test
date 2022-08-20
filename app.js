const express = require('express')
const host = 'localhost'
const port = 3000
const app = express()

app.get('/', (req,res) => {
    res.send('site is online !')
})

app.listen(port, (req,res) => {
    console.log(`server is open : http://${host}:${port}`);
})