const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config");
const User = require("../model/userModel");
const userModel = require("../model/userModel");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET ALL USERS
router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// REGISTER USER
router.post("/register", (req, res) => {
  User.find({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    if (data.length > 0) {
      res.send("Email already taken");
    } else {
      // encrypt password
      let hashpassword = bcrypt.hashSync(req.body.password, 8);
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: hashpassword,
          phone: req.body.phone,
          role: req.body.role ? req.body.role : "User",
        },
        (err, data) => {
          if (err) return res.send("Error while Registering");
          res.send("Registration Successfull");
        }
      );
    }
  });
});

// LOGIN USER
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, toker: "Error While Login" });
    if (!user) return res.send({ auth: false, token: "No User Found" });
    else {
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid)
        return res.send({ auth: false, token: "Invalid Password" });
      // correct authentication
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400,
      });
      res.send({ auth: true, token: token });
    }
  });
});

// LOGIN USER AND GET USER INFO
router.get("/userInfo", (req, res) => {
  let token = req.headers["access-token"];
  if (!token) res.send({ auth: false, token: "No Token Provided" });
  //  verify jwt
  jwt.verify(token, config.secret, (err, user) => {
    if (err) res.send({ auth: false, token: "Invalid Token" });
    User.findById(user.id, (err, result) => {
      res.send(result);
    });
  });
});

module.exports = router;
