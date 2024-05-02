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
  host: "brxfwcnlvqrymwrxoprd-mysql.services.clever-cloud.com",
  user: "ug76o7qet3wpi0w9",
  database: "brxfwcnlvqrymwrxoprd",
  password: "niz6s5rdwNxEvPDiTS23",
});

export default config;
