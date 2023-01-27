// var data = require("code/savedata_records.json");
// console.log(data.collection.length);

// git pages url
// import data from "../code/savedata_records.json" assert { type: "JSON" };
// const data = JSON.parse("../../data/savedata_records.json");
//
const path = "/code/savedata_records.json";

const dataPromise = d3.json(path);

console.log("Data Promise: ", dataPromise);

console.log("test 2");
