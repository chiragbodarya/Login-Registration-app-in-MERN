const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployModel = require('./models/Employ')

// mongoose connection 
mongoose.connect('mongodb://127.0.0.1:27017/employ');

const app = express()
app.use(express.json())
app.use(cors())




app.post('/register', (req, res) => {
    EmployModel.create(req.body)
        .then(employ => res.json(employ))
        .catch((err) => {
            console.log('error', err)
        })
})


app.listen(3001, () => {
    console.log('server is running')
})