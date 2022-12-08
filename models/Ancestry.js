const mongoose = require("mongoose");

const AncestrySchema = new mongoose.Schema({
  apiId: {
    type: String,
  },
  name: {
    type: String,
  },
  hp: {
    type: Number,
  },
  size: {
    type: String,
  },
  speed: {
    type: Number,
  },
  vision: {
    type: String,
  },
  abilityBoost: {
    type: Array,
  },
  abilityFlaw: {
    type: Array,
  },
  mainLanguages: {
    type: Array,
  },
  additionalLanguages: {
    type: Array,
  },
});

module.exports = mongoose.model("Ancestry", AncestrySchema);
