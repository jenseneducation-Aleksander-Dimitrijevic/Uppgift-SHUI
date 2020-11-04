const router = require("express").Router();
const { verifyToken } = require("./verifyUser");
router.get("/", verifyToken, async (req, res) => {
  const user = req.user;
  if (user) {
    res.status(200).json(user);
    return;
  }
  res.status(401).json({ error: "You are not authorized" });
});

module.exports = router;
