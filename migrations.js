const { migrate } = require("postgres-migrations");

module.exports = async function() {
  const dbConfig = {
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),

    // Default: false for backwards-compatibility
    // This might change!
    ensureDatabaseExists: true,

    // Default: "postgres"
    // Used when checking/creating "database-name"
    defaultDatabase: process.env.DATABASE_NAME
  }

  await migrate(dbConfig, "migrations");

  console.log('Migrations completed!');
}
