const router = require("express").Router();
const { verifyToken } = require("./verifyUser");
const { getAllStreams } = require("../models/Stream");

router.get("/", verifyToken, async (req, res) => {
  if (req.user) {
    res.status(200).json({
      user: req.user,
      streams: await getAllStreams(),
    });
    return;
  }
  res.status(401).json({ error: "You are not authorized" });
});

module.exports = router;
