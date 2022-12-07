const mongoose = require("mongoose");
const Actions = require("../models/Actions");
const Ancestry = require("../models/Ancestry");
const AncestryFeats = require("../models/AncestryFeats");

module.exports = {
  getActions: async (req, res) => {
    try {
      const actions = await Actions.find();
      console.log(actions, "actions controller");
      //   res.render("actions", { actions: actions });
    } catch (err) {
      console.error(err);
    }
  },
  getAncestry: async (req, res) => {
    try {
      const ancestry = await Ancestry.find();
      console.log(ancestry, "ancestry controller");
      //   res.render("actions", { actions: actions });
    } catch (err) {
      console.error(err);
    }
  },
  getAncestryFeats: async (req, res) => {
    try {
      const ancestryFeats = await AncestryFeats.find();
      console.log(ancestryFeats, "ancestryfeats controller");
      //   res.render("actions", { actions: actions });
    } catch (err) {
      console.error(err);
    }
  },
};
