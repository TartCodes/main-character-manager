const mongoose = require("mongoose");

const ActionsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  actionName: {
    type: String,
  },
  actionDescription: {
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
