const express = require("express");
const passport = require("passport");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/api", apiController.getActions);
