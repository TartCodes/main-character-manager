const mongoose = require("mongoose");

module.exports = {
  getActions: async () => {
    try {
      const res = await fetch(`https://api.pathfinder2.fr/v1/pf2/action`, {
        method: "GET", //
        headers: {
          "Content-Type": "application/json",
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce",
        },
      });
      const data = await res.json();
      const actionsArray = data.results.map((e) => {
        return {
          names: e.names,
          descriptions: e.data.description.value,
          actionType: e.data.actionType,
          actionCost: e.data.actions,
        };
      });
      console.log(actionsArray);
      return actionsArray;
    } catch (err) {
      console.log(err);
    }
  },
};
