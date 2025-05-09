// config/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // ✅ This loads the .env file

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

console.log('✅ MySQL connected...');
export default connection;
console.log("DB_USER:", process.env.DB_USER); // Should show your username like "root"
