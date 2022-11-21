const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const mongoose = require("mongoose");

module.exports = {
  getActions: async () => {
    try {
      const res = await fetch(`https://api.pathfinder2.fr/v1/pf2/action`, {
        method: "GET", // POST might work? Like NOSTO taske home, for some to fill desired inputs?
        headers: {
          "Content-Type": "application/json",
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
