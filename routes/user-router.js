const express = require("express");
const { register, login } = require("../controller/auth.controller");
const upload = require("../upload/upload");
const verifyToken = require("../middleware/auth");
const {
  getUser,
  getUserFriends,
  removeAddFriend,
} = require("../controller/user.controller");
const {
  getFeedPosts,
  getUserPosts,
  likePost,
} = require("../controller/post.controller");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Worinerter");
});

router.post("/auth/register", upload.single("picture"), register);
router.post("/auth/login", login);
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.patch("/:id/:friendId", verifyToken, removeAddFriend);
router.get("/posts", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);

module.exports = router;
