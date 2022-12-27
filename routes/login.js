var express = require('express')
var router = express.Router()

router.post('/login', function(req, res, next) {
    username = req.body.username
    password = req.body.password
    console.log(req.body)
    res.json(req.body)
})

router.get('/login', function(req, res, next) {
    res.sendFile('view/login.html', {root: _dirname})
})