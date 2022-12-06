const fetch = require("node-fetch");
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const Actions = require("./models/Actions");
const Ancestry = require("./models/Ancestry");

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
          apiId: e._id,
          name: e.name,
          description: e.description,
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
  //new objects
  let actionsData = new GetData();
  let ancestryData = new GetData();
  //declare
  const actions = await actionsData.getActions();
  const ancestry = await ancestryData.getAncestry();

  for (let i = 0; i < actions.length; i++) {
    await Actions.replaceOne(
      {
        apiId: actions[i].apiId,
      },
      actions[i], //data for this object
      {
        upsert: true,
      }
    );
  }
  //this next
  for (let i = 0; i < ancestry.length; i++) {
    await Ancestry.replaceOne(
      {
        apiId: ancestry[i].apiId,
      },
      ancestry[i], //data for this object
      {
        upsert: true,
      }
    );
    console.log(`${ancestry[i]}`);
  }
  await mongoose.disconnect();
};

doDataImport().catch((err) => {
  console.error(err);
});
