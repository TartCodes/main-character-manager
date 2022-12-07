const express = require("express");
const passport = require("passport");
const router = express.Router();
const apiDataController = require("../controllers/apiData");

router.get("/apiData", apiDataController.getActions);
router.get("/apiData", apiDataController.getAncestry);
router.get("/apiData", apiDataController.getAncestryFeats);

module.exports = router;
