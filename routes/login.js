var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var create = require('../helpers/login/create');
var get_student_by_email = require('../helpers/login/get_student_by_email');

router.post('/signup', async (req, res) => {
    console.log(req.body);
    const id = await create(req.body);
    res.send(id)
})

router.post('/login', async (req, res) => {
    const id = await get_student_by_email(req.body);
    res.send(id)
})

module.exports = router;
