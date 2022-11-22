const express = require("express");
const passport = require("passport");
const router = express.Router();
const actionsController = require("../controllers/actions");

router.get("/actions", actionsController.getActions);
