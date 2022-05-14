/* eslint-disable camelcase */


// exports.shorthands = undefined;

// exports.up = pgm => {};

// exports.down = pgm => {};


exports.up = (pgm) => {
    pgm.createTable('students', {
      id: 'id',
      first_name: { type: 'varchar(255)', notNull: true },
      last_name: { type: 'varchar(255)', notNull: true },
      phone: {type: 'varchar(255)', notNull: true },
      email: {type: 'varchar(255)', notNull: true}, 
      street: {type: 'varchar(255)', notNull: true}, 
      city: {type: 'varchar(255)', notNull: true}, 
      state: {type: 'varchar(255)', notNull: true}, 
      zip_code : {type: 'varchar(255)', notNull: true},  
      school: {type: 'varchar(255)', notNull: true}, 
      age: {type: 'varchar(255)', notNull: true}, 
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
    pgm.createTable('listings', {
      id: 'id',
      studentsId: {
        type: 'integer',
        notNull: true,
        references: '"students"',
        onDelete: 'cascade',
      },
      lease_duration: { type: 'varchar(255)', notNull: true },
      number_rooms_available: { type: 'varchar(255)', notNull: true },
      total_rooms: { type: 'varchar(255)', notNull: true }, 
      pets: { type: 'varchar(255)', notNull: true }, 
      ensuite_washroom: { type: 'varchar(255)', notNull: true }, 
      ensuite_laundry: { type: 'varchar(255)', notNull: true }, 
      ac: { type: 'varchar(255)', notNull: true }, 
      utilities: { type: 'varchar(255)', notNull: true },
      street: { type: 'varchar(255)', notNull: true }, 
      city: { type: 'varchar(255)', notNull: true }, 
      state: { type: 'varchar(255)', notNull: true },
      zip_code: { type: 'varchar(255)', notNull: true }, 
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
    pgm.createIndex('listings', 'studentsId')
  }
