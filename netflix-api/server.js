const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const RegisterRouter = require("./routes/Register");
const LoginRoute = require("./routes/Login");
const app = express();
const DBConnect = require("./Database/connection")
require('dotenv').config();


app.use(cors());
app.use(express.json());

DBConnect();

app.use("/api/user", userRoutes);
app.use("/register",RegisterRouter);
app.use("/login",LoginRoute);
app.listen(5000, () => {
  console.log("server started on port 5000");
});



