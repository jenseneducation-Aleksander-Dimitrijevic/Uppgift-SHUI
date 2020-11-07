const router = require("express").Router();
const User = require("../models/User");
const { getSelectedTags } = require("../models/Stream");
const { verifyToken } = require("./verifyUser");

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

router.post("/api/subscription", verifyToken, async (req, res) => {
  const streams = await getSelectedTags(Object.keys(req.body)[0]);
  if (streams) {
    res.status(200).json(streams);
    return;
  }
  res.status(500).json({ error: "Credentials not valid" });
});

module.exports = router;
