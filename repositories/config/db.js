"use strict";
/**
 * configuration of database with mysql2
 * use pool to allow multiple connections
 * @module database
 */
const dotenv = require("dotenv").config();
const mysql = require("mysql2");

/**
 * Database Setup
 * For more info @see {@link https://www.npmjs.com/package/mysql2}
 */
const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});
/**
 * Export as promise to support async await
 */
module.exports = pool.promise();