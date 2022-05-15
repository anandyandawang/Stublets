var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var getById = require('../helpers/students/getById');

router.get('/:id', async (req, res) => {
    console.log(req.params)
    var student = await getById(req.params.id)
    res.send(student)
})

module.exports = router;
