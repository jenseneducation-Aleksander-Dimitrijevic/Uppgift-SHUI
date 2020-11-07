const router = require("express").Router();
const { verifyToken } = require("./verifyUser");
const {
  setSubscriptions,
  getSubscriptions,
} = require("../models/Subscription");

router.post("/", verifyToken, (req, res) => {
  const streams = setSubscriptions(req.body, req.user.userID);
  if (streams) {
    res.status(201).json({ message: "Successful" });
    return;
  }
  res.status(401).json({ error: "Not authorized" });
});

router.get("/", verifyToken, async (req, res) => {
  const streams = await getSubscriptions(req.user.userID);
  if (streams) {
    res.status(200).json(streams);
    return;
  }
  res.status(401).json({ error: "Not authorized" });
});

module.exports = router;
