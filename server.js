const express = require('express');
const fs = require('fs');
const TimeVerification = require('./middleware');
const app = express();

app.get(('/'), TimeVerification, (req, res) => {
    fs.readFile('./home/home.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("Home"));
    
})
app.get(('/services'), TimeVerification, (req, res) => {
    fs.readFile('./services/services.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("services"));

})
app.get(('/Contact'), TimeVerification, (req, res) => {
    fs.readFile('./contact/contact.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("Contact"));

})

const PORT = 5000;

app.listen(PORT, err => err ? console.log(err) : console.log(`server running en PORT ${PORT}`))
