const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const myLogger = (req,res,next) => {console.log('logged'), next()}

app.use(myLogger)
myData=['maya','itay']
app.get('/',(req,res) => {res.send(myData)})

app.listen(3000)