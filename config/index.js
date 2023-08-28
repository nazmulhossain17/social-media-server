require("dotenv").config();

const port = process.env.PORT;
const dbURL = process.env.DB_URL;
const jwtKey = process.env.JWT_SECRET;

module.exports = { port, dbURL, jwtKey };
