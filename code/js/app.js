var colourList = [
  "#00876c",
  "#3e9c73",
  "#64b17a",
  "#89c581",
  "#afd989",
  "#d6ec93",
  "#ffff9f",
  "#fae275",
  "#f7c44e",
  "#f5a429",
  "#f38004",
  "#f05600",
  "#eb0202",
  "#0b048f",
  "#6936a7",
  "#a269c2",
  "#d3a0df",
  "#ffdaff",
  "#ffaddf",
  "#ff7caa",
  "#ff4764",
  "#eb1509",
  "#399283",
  "#47f0a3",
  "#214d4e",
  "#65e6f9",
  "#1c4bb4",
  "#82a0ca",
  "#91207b",
  "#c875ac",
  "#e855d0",
  "#5a3e4f",
  "#8184fb",
  "#8601ee",
  "#fcc2fb",
  "#4f8522",
  "#a7d479",
  "#683c00",
  "#f8cca6",
  "#d11f0b",
  "#fe8f06",
  "#ab7950",
  "#f8d147",
  "#ff4d82",
  "#7fee3f",
  "#ca952d",
  "#41f9f9",
  "#7fcc38",
  "#448c98",
  "#901582",
  "#7fffd4",
  "#8a2be2",
  "#7fff00",
  "#008b8b",
  "#b22222",
];
// var data = require("code/savedata_records.json");
// console.log(data.collection.length);

// git pages url
// import data from "../code/savedata_records.json" assert { type: "JSON" };
// const data = JSON.parse("../../data/savedata_records.json");
//
const path = "/code/Jupyter_notebook/savedata_records.json";
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
var stateNames = [];
var plotValues = [];

// define function extractAll to get all state data in plottable format
function extractAll(input) {
  for (let i = 0; i < usStateAbb.length; i++) {
    let thisState = input.filter(function (row) {
      return row.locationabbr === usStateAbb[i];
    });
    let thisX = thisState.map(function (row) {
      return row.yearstart;
    });
    let thisY = thisState.map((item) => parseFloat(item.datavalue));
    let thisLabelA = thisState.map((item) => item.locationdesc);
    let thisLabel = thisLabelA[0];
    stateNames.push(thisLabel);
    // set up dataset object
    let plotDataS = {
      label: thisLabel,
      data: thisY,
      fill: false,
      borderColor: colourList[i],
      pointRadius: 5,
      tension: 0.1,
    };
    plotValues.push(plotDataS);
  }
  console.log(plotValues);
}
// define function 'extract' to extract data from stateObject
function extract(input) {
  let stateLabelA = input.map((item) => item.locationdesc);
  let stateLabel = stateLabelA[0];
  var stateDataX = input.map(function (item) {
    return item.yearstart;
  });
  var stateDataY = input.map((item) => parseFloat(item.datavalue));
  console.log(stateDataY);

  // setup
  var plotData = {
    labels: stateDataX,
    // datasets: plotValues,
    datasets: {
      label: stateLabel,
      data: stateDataY,
      fill: false,
      // borderColor: colourList[i],
      pointRadius: 5,
      tension: 0.1,
    },
  };
  new Chart(document.getElementById("myChartSt"), {
    type: "line",
    data: plotData,
    options: {
      plugins: {
        legend: {
          display: true,
        },
      },
      tooltips: {
        enabled: true,
      },
    },
  });
}
// __________________________________________________________________________________
// invoke extractAll
dataPromise.then(function (data) {
  extractAll(data);
});
//initial data promise then call extract function to plot first chart using 'US' for state
// invoke extract
dataPromise.then(function (data) {
  var stateObject = data.filter(function (row) {
    return row.locationabbr == "US";
  });
  console.log(stateObject);
  extract(stateObject);
});
