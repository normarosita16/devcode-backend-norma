require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: "+07:00",
    //migrationStorageTableSchema: "public",
    //schema: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: "+07:00",
    //migrationStorageTableSchema: "public",
    //schema: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
  },
};
