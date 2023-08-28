require("dotenv").config();

const port = process.env.PORT;
const dbURL = process.env.DB_URL;

module.exports = { port, dbURL };
