const mongoose = require("mongoose");

const AncestrySchema = new mongoose.Schema({
  apiId: {
    type: String,
  },
  name: {
    type: String,
  },
  descriptions: {
    type: String,
  },
});

module.exports = mongoose.model("Ancestry", AncestrySchema);
