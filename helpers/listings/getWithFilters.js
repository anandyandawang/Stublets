const db = require('../db');
const knex = require('../knex');

module.exports = async function getWithFilters(info){
    var queryBuilder = knex('listings')
    const result = await db.query(queryBuilder.toSQL().sql);
    return result
}
