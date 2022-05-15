var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var create = require('../helpers/listings/create');
var getWithFilters = require('../helpers/listings/getWithFilters');

router.post('/', async (req, res) => {
    var id = await create(req.body)
    res.send(id)
})

router.get('/', async (req, res) => {
    var listings = await getWithFilters(req.body)
    res.send(listings) // send student instead of student_id, cuz school
})

module.exports = router;
