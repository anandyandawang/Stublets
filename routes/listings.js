var express = require('express');
var router = express.Router();

router.use(express.json())
router.use(express.urlencoded())

var create = require('../helpers/listings/create');
var getWithFilters = require('../helpers/listings/getWithFilters');

router.post('/', async (req, res) => {
    console.log(req.body)
    var id = await create(req.body)
    res.send(id)
})

router.get('/', async (req, res) => {
    console.log(req.body)
    var listings = await getWithFilters(req.body)
    res.send(listings)
})

module.exports = router;
