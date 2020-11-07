const router = require("express").Router();
const { verifyToken } = require("./verifyUser");
const { getUserStreams } = require("../models/Stream");

router.get("/", verifyToken, async (req, res) => {
  if (req.user) {
    res.status(200).json({
      user: req.user,
      streams: await getUserStreams(),
    });
    return;
  }
  res.status(401).json({ error: "You are not authorized" });
});

module.exports = router;
