CREATE TABLE students (
    id serial primary key,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    age varchar(255) NOT NULL,
    phone varchar(255) NOT NULL, 
    email varchar(255) NOT NULL, 
    street varchar(255) NOT NULL, 
    city varchar(255) NOT NULL, 
    province varchar(255) NOT NULL, 
    zip_code varchar(255) NOT NULL, 
    school varchar(255) NOT NULL
);

CREATE TABLE listings (
    id serial primary key, 
    student_id int REFERENCES students, 
    price varchar(255) NOT NULL, 
    lease_duration varchar(255) NOT NULL, 
    number_rooms_available varchar(255) NOT NULL, 
    total_rooms varchar(255) NOT NULL, 
    pets varchar(255) NOT NULL, 
    ensuite_washroom varchar(255) NOT NULL, 
    ensuite_laundry varchar(255) NOT NULL, 
    ac varchar(255) NOT NULL,
    utilities varchar(255) NOT NULL,
    street varchar(255) NOT NULL, 
    city varchar(255) NOT NULL,
    province varchar(255) NOT NULL,
    zip_code varchar(255) NOT NULL
);
