const express = require('express');

const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
    EmployModel.create(req.body)
        .then(employ => res.json(employ))
        .catch((err) => {
            console.log('error', err)
        })
})