const mongoose = require("mongoose");
const fetch = require("node-fetch");
const Actions = require("../models/Actions");

module.exports = {
  getActions: async () => {
    try {
      const res = await fetch(`https://api.pathfinder2.fr/v1/pf2/action`, {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
        },
      });

      const data = await res.json();
      console.log(data);
      const actionsArray = data.results.map((e) => {
        return {
          names: e.name,
          descriptions: e.data.description.value,
          actionType: e.data.actionType,
          actionCost: e.data.actions,
        };
      });
      res.render("editCharacter.ejs", {
        actions: actionsArray,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
