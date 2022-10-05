require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
    timezone: "+07:00",
    migrationStorageTableSchema: "public",
    schema: process.env.MYSQL_SCHEMA,
    port: process.env.MYSQL_PORT,
  },
  production: {
    username: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
    timezone: "+07:00",
    migrationStorageTableSchema: "public",
    schema: process.env.MYSQL_SCHEMA,
    port: process.env.MYSQL_PORT,
  },
};
