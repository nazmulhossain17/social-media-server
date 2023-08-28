const app = require("./app");
const { port, dbURL } = require("./config");
const mongoose = require("mongoose");
const User = require("./model/User");
const Post = require("./model/Post");
// const { users, posts } = require("./data");

const connectDB = async () => {
  try {
    // mongoose.connect(dbURL).then(() => {
    //   User.insertMany(users);
    //   Post.insertMany(posts);
    // });
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
