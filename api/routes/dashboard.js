const router = require("express").Router();
const { verifyToken } = require("./verifyUser");
const streamsData = require("../data/streams.json");

router.get("/", verifyToken, async (req, res) => {
  if (req.user) {
    res.status(200).json({
      user: req.user,
      streams: streamsData.streams,
    });
    return;
  }
  res.status(401).json({ error: "You are not authorized" });
});

module.exports = router;
