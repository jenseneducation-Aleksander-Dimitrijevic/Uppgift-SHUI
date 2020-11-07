const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/users");
const dashboardRoute = require("./routes/dashboard");
const subscriptionsRouter = require("./routes/subscriptions");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/subscriptions", subscriptionsRouter);

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
