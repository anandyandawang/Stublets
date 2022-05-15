var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var create = require('../helpers/listings/create');

router.post('/', async (req, res) => {
    var id = await create(req.body)
    res.send(id)
})

router.get('/', (req, res) => {
    res.send('Listings') // send student instead of student_id, cuz school
})

module.exports = router;
