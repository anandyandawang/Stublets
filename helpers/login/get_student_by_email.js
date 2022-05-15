const db = require('../db');

module.exports = async function get_student_by_email(info){
    const result = await db.query(
        `SELECT id 
         FROM students
         WHERE email = $1`,
        [info.email]
    );
    return result
}
