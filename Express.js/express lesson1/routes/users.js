const express = require("express"),
  router = express.Router();

router.get("/register", (req, res) => {
  res.send("I am a GET request at Register route");
});
router.get("/login", (req, res) => {
  res.send("I am a GET request at Login route");
});

module.exports = router;
