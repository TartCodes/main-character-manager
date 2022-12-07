const mongoose = require("mongoose");

const AncestryFeatsSchema = new mongoose.Schema({
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

module.exports = mongoose.model("AncestryFeats", AncestryFeatsSchema);
