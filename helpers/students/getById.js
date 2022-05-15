const db = require('../db');

module.exports = async function getById(id){
    const result = await db.query(
        `SELECT *
        FROM students 
        WHERE id = $1`,
        [id]
    );
    return result
}
