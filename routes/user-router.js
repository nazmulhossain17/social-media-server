const express = require("express");
const { register, login } = require("../controller/auth.controller");
const upload = require("../upload/upload");
const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Worinerter");
});

router.post("/auth/register", upload.single("picture"), register);
router.post("/auth/login", login);

module.exports = router;
