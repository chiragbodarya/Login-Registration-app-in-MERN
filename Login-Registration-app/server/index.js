const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployModel = require('./models/Employ')



const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/employ');


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