const db = require('../db');
const knex = require('../knex');

module.exports = async function getWithFilters(filters){
    var queryBuilder = knex
        .select('*', 'listings.id')
        .from('listings')
        .join('students', 'students.id', '=', 'listings.student_id')

    console.log(filters)

    queryBuilder = applyFilters(queryBuilder, filters);
    console.log(queryBuilder.toSQL())
    const result = await queryBuilder
    return result
}

function applyFilters(queryBuilder, filters) {
    if (filters.minPrice) {
        queryBuilder = queryBuilder.andWhere('price', '>', filters.minPrice)
    }

    if (filters.maxPrice) {
        queryBuilder = queryBuilder.andWhere('price', '<', filters.maxPrice)
    }

    if (filters.totalRooms) {
        queryBuilder = queryBuilder.andWhere('total_rooms', filters.totalRooms)
    }

    if (filters.ac) {
        queryBuilder = queryBuilder.andWhere('ac', filters.ac)
    }

    if (filters.pets) {
        queryBuilder = queryBuilder.andWhere('pets', filters.pets)
    }

    if (filters.ensuiteWashroom) {
        queryBuilder = queryBuilder.andWhere('ensuite_washroom', filters.ensuiteWashroom)
    }

    if (filters.school) {
        queryBuilder = queryBuilder.andWhereILike('school', filters.school)
    }

    return queryBuilder
}
