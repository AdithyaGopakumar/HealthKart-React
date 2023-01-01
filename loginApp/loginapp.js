const express = require("express");
const app = express();
const db = require("./db");
const port = 5000;
let cors = require("cors");
app.use(cors());

const AuthController = require("./controller/AuthContoller");
app.use("/api/auth", AuthController);

app.listen(port, () => {
  console.log("listening to port 5000");
});
