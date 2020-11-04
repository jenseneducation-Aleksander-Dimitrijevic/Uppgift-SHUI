const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/api/register", usersRouter);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
