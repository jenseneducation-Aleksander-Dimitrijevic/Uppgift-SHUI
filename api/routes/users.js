const router = require("express").Router();
const User = require("../models/User");
router.post("/api/register", async (req, res) => {
  const user = await User.register(req.body);
  if (user) {
    res.status(201).json(user);
    return;
  }
  res.status(500).json({ error: "Credentials not valid" });
});
router.post("/api/login", async (req, res) => {
  const user = await User.login(req.body);
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(500).json({ error: "Credentials not valid" });
});

module.exports = router;
