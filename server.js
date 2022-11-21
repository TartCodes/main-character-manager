const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const methodOverride = require("method-override");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const characterRoutes = require("./routes/character");
const authRoute = require("./routes/auth");
const fetch = require("node-fetch");
// const { getActions } = require("./controllers/api");

getActions = async () => {
  try {
    const response = await fetch(`https://api.pathfinder2.fr/v1/pf2/action`, {
      method: "GET", // POST might work? Like NOSTO taske home, for some to fill desired inputs?
      headers: {
        "Content-Type": "application/json",
        Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
      },
    });
    const data = await response.json();
    console.log(
      data.results.filter((e) => {
        let neededData = [];
        let names = e.name;
        let descriptions = e.data.description.value;
        let actionType = e.data.actionType;
        let actionCost = e.data.actions;
        neededData.push(names, descriptions, actionType, actionCost);
        console.log(neededData);
      })
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
getActions();

// routes i need?
//Actions
//e.data.description.value

//helpers
//helper function? for data and time
app.locals.dateAndTime = () => {
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString("en-us", options);
};

//load config
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

connectDB();

//body parser
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

//routes
app.use("/", mainRoutes);
app.use("/character", characterRoutes);
app.use("/auth", authRoute);
// app.use("/api", apiRoute);
// app.use('/weapon', weaponRoutes)

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running, you better catch it!");
});
