const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const SECRET = "secret123";
const users = [];

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ msg: "Registered Successfully" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, SECRET);
  res.json({ token });
});

const auth = require("../middleware/authMiddleware");

router.get("/dashboard", auth, (req, res) => {
  res.json({
    msg: "Welcome to Dashboard",
    user: req.user
  });
});

module.exports = router;
