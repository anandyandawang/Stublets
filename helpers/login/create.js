const db = require('../db');

module.exports = async function create(info){
    const result = await db.query(
        `INSERT INTO students(first_name, last_name, phone, email, school) 
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [info.firstName, info.lastName, info.phone, info.email, info.school]
    );
    return result
}
