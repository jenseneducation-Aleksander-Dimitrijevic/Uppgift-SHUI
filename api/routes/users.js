const router = require("express").Router();
const {
  login,
  register,
  setSubscription,
  getSubscriptions,
} = require("../models/User");
const { verifyToken } = require("./verifyUser");

router.post("/register", async (req, res) => {
  const user = await register(req.body);
  if (user) {
    res.status(201).json(user);
    return;
  }
  res.status(500).json({ error: "Credentials not valid" });
});

router.post("/login", async (req, res) => {
  const user = await login(req.body);
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(500).json({ error: "Credentials not valid" });
});

router.post("/subscriptions", verifyToken, async (req, res) => {
  const tags = await setSubscription(req.body, req.user.userID);
  if (tags) {
    res.status(201).json({ message: "Successful" });
    return;
  }
  res.status(401).json({ error: "Not authorized" });
});

router.get("/subscriptions", verifyToken, async (req, res) => {
  const subscriptions = await getSubscriptions(req.user.userID);
  if (subscriptions) {
    res.status(201).json(subscriptions);
    return;
  }
  res.status(401).json({ error: "Not authorized" });
});

module.exports = router;
