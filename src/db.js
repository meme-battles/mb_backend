const { Client } = require('pg');
const pg = require('pg');

pg.defaults.ssl = true;

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

module.exports = client;
