const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/", auth, (req, res) => {
  res.json({
    msg: "Welcome to Dashboard 🎉",
    userId: req.user.id
  });
});

module.exports = router;
