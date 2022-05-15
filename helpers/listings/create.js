const db = require('../db');

module.exports = async function create(info){
    const result = await db.query(
        `INSERT INTO listings(student_id, price, lease_duration,
        number_rooms_available, total_rooms, pets, ensuite_washroom, ensuite_laundry,
        ac, utilities, street, city, province, zip_code) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id`,
        [info.studentId, info.price, info.leaseDuration, info.numberRoomsAvailable, info.totalRooms,
        info.pets, info.ensuiteWashroom, info.ensuiteLaundry, info.ac, info.utilities, info.street,
        info.city, info.province, info.zip_code]
    );
    return result
}
