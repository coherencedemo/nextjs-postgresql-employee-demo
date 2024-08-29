const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.NEON_DB_URL,
  
});
console.error('Using database:', process.env.NEON_DB_URL);

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database successfully');
    console.log('Current timestamp:', res.rows[0].now);
  }
});

module.exports = pool;
