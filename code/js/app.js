// var data = require("code/savedata_records.json");
// console.log(data.collection.length);

// git pages url
// import data from "../code/savedata_records.json" assert { type: "JSON" };
// const data = JSON.parse("../../data/savedata_records.json");
//
const path = "/code/savedata_records.json";
const dataPromise = d3.json(path);
const usStateAbb = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "US",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
];
console.log("Data Promise: ", dataPromise);
console.log("test 2");
// first function: data promise to get list of state values
var years = ["2014", "2015", "2016", "2017", "2018", "2019"];
var abbrs = [];
var states = [];
var plotValues = [];

// functionto get all state data in plottable format
function extractAll(input) {
  // for (a in input) {
  for (z in usStateAbb) {
    let thisState = data.filter(function (row) {
      return row.locationabbr === usStateAbb[z];
    });
    let thisX = thisState.map(function (row) {
      return row.yearstart;
    });
    let thisY = thisState.map((item) => parseInt(item.datavalue));
    let thisLabelA = thisState.map((item) => item.locationdesc);
    let thisLabel = thisLabelA[0];

    // setup
    let plotDataS = {
      labels: thisX,
      datasets: [
        {
          label: thisLabel,
          data: thisY,
          fill: false,
        },
      ],
    };
    plotValues.push(plotDataS);
  }
  console.log(plotValues);
}
dataPromise.then(function (data) {
  extractAll(data);
});

// initial data promise then call extract function to plot first chart
dataPromise.then(function (data) {
  var stateObject = data.filter(function (row) {
    return row.locationabbr === "US";
  });
  console.log(stateObject);
  extract(stateObject);
});
// define function 'extract' to extract data from stateObject
function extract(input) {
  var stateDataX = input.map(function (item) {
    return item.yearstart;
  });
  var stateDataY = input.map((item) => parseInt(item.datavalue));
  // first attempt at plotting with charts.js
  // setup
  var plotData = {
    labels: stateDataX,
    datasets: [
      {
        label: "Alaska",
        data: stateDataY,
        fill: false,
      },
    ],
  };
  new Chart(document.getElementById("myChartSt"), {
    type: "line",
    data: plotData,
  });
}
