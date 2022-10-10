require("dotenv").config();
const express = require("express");
const path = require("path");
const Router = require("./routes/userRouter");
const session = require("express-session");
const flash = require("connect-flash");
const app = express();
//middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.static(__dirname + "/public"));

app.use("/upload", express.static(__dirname + "/upload"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
  session({
    secret: process.env.MY_SECRET,
    cookie: {
      maxAge: 60000,
    },
    saveUninitialized: false,
    resave: false,
  })
);
app.use(flash());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/success", (req, res) => {
  res.render("success", {
    file: req.session.file,
    message: req.flash("success"),
  });
});
app.use("/api", Router);

module.exports = app;
