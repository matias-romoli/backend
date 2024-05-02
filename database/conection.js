import { createPool } from "mysql2/promise";

export const createTable = async () => {
  const table = `
        CREATE TABLE IF NOT EXISTS newtask (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            completed boolean DEFAULT false
        )
    `;

  try {
    return await config.query(table);
  } catch (error) {
    return error;
  }
};
const config = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

export default config;
