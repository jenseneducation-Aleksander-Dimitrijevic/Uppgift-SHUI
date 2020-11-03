const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/greet", (req, res) => res.send("Hello from NodeJS"));

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
