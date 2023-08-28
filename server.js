const app = require("./app");
const { port, dbURL } = require("./config");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Database Connected!");
    app.listen(port, () => {
      console.log(`Server running on PORT ${port}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectDB();
