const mongoose = require("mongoose");
const Actions = require("../models/Actions");
const Ancestry = require("../models/Ancestry");

module.exports = {
  getActions: async (req, res) => {
    try {
      const actions = await Actions.find();
      // console.log(actions);
      //   res.render("actions", { actions: actions });
    } catch (err) {
      console.error(err);
    }
  },
  getAncestry: async (req, res) => {
    try {
      const ancestry = await Ancestry.find();
      // console.log(ancestry.apiId);
      //   res.render("actions", { actions: actions });
    } catch (err) {
      console.error(err);
    }
  },
};
// module.exports = { getActions };
// module.exports = { getAncestry };
