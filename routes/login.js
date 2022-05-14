var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var create = require('../helpers/login/create');

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const id = await create(req.body);
    res.send(id)
})

router.post('/login', (req, res) => {
    res.send('Login')
})

module.exports = router;
