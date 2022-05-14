var express = require('express');
var router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Signup')
})

router.post('/login', (req, res) => {
    res.send('Login')
})

module.exports = router;
