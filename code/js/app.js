// npm install csv-parse

// const fs = require("fs");
// const readline = require("readline");
// const stream = fs.createReadStream("../../data/US-CDI_diabetes_prevalence.csv");
// const rl = readline.createInterface({ input: stream });
// let data = [];

// rl.on("line", (row) => {
//   data.push(row.split(","));
// });

// rl.on("close", () => {
//   console.log(data);
// });
var data = require("../savedata_records.json");
console.log(data.collection.length);

// git pages url
// import data from "../code/savedata_records.json" assert { type: "JSON" };
// const data = JSON.parse("../../data/savedata_records.json");
console.log("test");
console.log(data[0]);
