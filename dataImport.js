const fetch = require("node-fetch");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const Actions = require("./models/Actions");
const Ancestry = require("./models/Ancestry");
const AncestryFeats = require("./models/AncestryFeats");
require("dotenv").config({ path: "./config/.env" });

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
          descriptions: e.system.description.value,
          actionType: e.system.actionType.value,
          actionCost: e.system.actions.value,
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
          hp: e.system.hp,
          size: e.system.size,
          speed: e.system.speed,
          vision: e.system.vision,
          abilityBoost: Object.values(e.system.boosts).map((e) => {
            return e.value;
          }),
          abilityFlaw: Object.values(e.system.flaws).map((e) => {
            return e.value.length === 0 ? (e.value = "none") : e.value;
          }),
          mainLanguages: e.system.languages.value.join(", "),
          additionalLanguages: e.system.additionalLanguages.value,
        };
      });
      // console.log(ancestryArray, "ancestryName arr");
      console.log(ancestryArray);
      return ancestryArray;
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
          apiId: e._id,
          name: e.name,
          descriptions: e.system.description.value,
        };
      });
      // console.log(ancestryFeatsArray, "ancestryFeats arr");
      return ancestryFeatsArray;
    } catch (err) {
      console.log(err);
    }
  };

  // getArchetype = async () => {
  //   try {
  //     const response = await fetch(this.archetypeUrl, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: this.auth,
  //       },
  //     });
  //     const data = await response.json();
  //     const archetypeArray = data.results.map((e) => {
  //       return {
  //         name: e.name,
  //       };
  //     });
  //     console.log(archetypeArray, "archetype arr");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
}

//doDataImport functions purpose is to input the data into MongoDB - node doDataImport in the console IMPORTANTTT!!!!
const doDataImport = async () => {
  await connectDB();
  //new objects
  let actionsData = new GetData();
  let ancestryData = new GetData();
  let ancestryFeatsData = new GetData();
  //declare
  const actions = await actionsData.getActions();
  const ancestry = await ancestryData.getAncestry();
  const ancestryFeats = await ancestryFeatsData.getAncestry();

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
  }

  for (let i = 0; i < ancestryFeats.length; i++) {
    await AncestryFeats.replaceOne(
      {
        apiId: ancestryFeats[i].apiId,
      },
      ancestryFeats[i], //data for this object
      {
        upsert: true,
      }
    );
  }
  await mongoose.disconnect();
};

doDataImport().catch((err) => {
  console.error(err);
});
