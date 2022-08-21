const express = require('express')

const port = process.enc.PORT || 3000
const app = express()

app.get('/', (req,res) => {
    res.send('site is online !')
})

app.listen(port, (req,res) => {
    console.log(`server is open : ${port}`);
}) 