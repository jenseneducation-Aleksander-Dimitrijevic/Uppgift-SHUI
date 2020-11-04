const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/users");
const dashboardRoute = require("./routes/dashboard");

app.use(cors());
app.use(express.json());

app.use("/", usersRouter);
app.use("/api/dashboard", dashboardRoute);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
