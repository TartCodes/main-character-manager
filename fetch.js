const express = require("express");
const app = express();
const fetch = require("node-fetch");

// class GetData {
//   actionUrl = "https://api.pathfinder2.fr/v1/pf2/action";
//   auth = "da468b89-2bf8-4e2b-a939-79c6e6ef25ce";

//   getActions = async () => {
//     try {
//       const response = await fetch(this.actionUrl, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: this.auth,
//         },
//       });
//       const data = await response.json();
//       const actionsArray = data.results.map((e) => {
//         return {
//           name: e.name,
//           descriptions: e.data.description.value,
//           actionType: e.data.actionType,
//           actionCost: e.data.actions,
//         };
//       });
//       console.log(actionsArray, "action arr");
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// let actions = new GetData();
// actions.getActions();
// console.log(actions);
