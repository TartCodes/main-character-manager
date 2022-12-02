const fetch = require("node-fetch");
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const Actions = require("./models/Actions");

class GetData {
  actionUrl = "https://api.pathfinder2.fr/v1/pf2/action";
  ancestryUrl = "https://api.pathfinder2.fr/v1/pf2/ancestry";
  ancestryFeatsUrl = "https://api.pathfinder2.fr/v1/pf2/ancestryFeature";
  archetypeUrl = "https://api.pathfinder2.fr/v1/pf2/archetype";
  auth = process.env.Authorization;

  getActions = async () => {
    try {
      const response = await fetch(this.actionUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.auth,
        },
      });
      const data = await response.json();
      const actionsArray = data.results.map((e) => {
        return {
          apiId: e._id,
          name: e.name,
          descriptions: e.data.description.value,
          actionType: e.data.actionType.value,
          actionCost: e.data.actions.value,
        };
      });
      return actionsArray;
    } catch (err) {
      console.log(err);
    }
  };

  getAncestry = async () => {
    try {
      const response = await fetch(this.ancestryUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.auth,
        },
      });
      const data = await response.json();
      const ancestryArray = data.results.map((e) => {
        return {
          name: e.name,
        };
      });
      console.log(ancestryArray, "ancestryName arr");
    } catch (err) {
      console.log(err);
    }
  };

  getAncestryFeats = async () => {
    try {
      const response = await fetch(this.ancestryFeatsUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.auth,
        },
      });
      const data = await response.json();
      const ancestryFeatsArray = data.results.map((e) => {
        return {
          name: e.name,
        };
      });
      console.log(ancestryFeatsArray, "ancestryFeats arr");
    } catch (err) {
      console.log(err);
    }
  };

  getArchetype = async () => {
    try {
      const response = await fetch(this.archetypeUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.auth,
        },
      });
      const data = await response.json();
      const archetypeArray = data.results.map((e) => {
        return {
          name: e.name,
        };
      });
      console.log(archetypeArray, "archetype arr");
    } catch (err) {
      console.log(err);
    }
  };
}

//doDataImport functions purpose is to input the data into MongoDB
const doDataImport = async () => {
  await connectDB();
  let actionsData = new GetData();
  const actions = await actionsData.getActions();
  //   console.log(`There are ${action.length}`);
  for (let i = 0; i < actions.length; i++) {
    // console.log(`importing ${actions[i].name}`);
    // console.log(`importing ${actions[i].descriptions}`);
    console.log(`importing ${actions[i].apiId}`);
    console.log(actions[i]);

    await Actions.replaceOne(
      {
        //to do -> filter for this object, same as findOne
        apiId: actions[i].apiId,
      },

      //data for this object
      actions[i],
      { upsert: true }
    );
  }
  await mongoose.disconnect();
};

doDataImport().catch((err) => {
  console.error(err);
});
