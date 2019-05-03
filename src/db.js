const { Client } = require('pg');
const pg = require('pg');

pg.defaults.ssl = true;

const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

module.exports = client;
