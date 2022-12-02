const mongoose = require("mongoose");

const ActionsSchema = new mongoose.Schema({
  apiId: {
    type: String,
  },
  name: {
    type: String,
  },
  descriptions: {
    type: String,
  },
  actionType: {
    type: String,
  },
  actionCost: {
    type: Number,
  },
});

module.exports = mongoose.model("Actions", ActionsSchema);
