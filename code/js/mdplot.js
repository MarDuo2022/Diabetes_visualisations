////////////////////////////////////////////
// Bar graph for different years 
////////////////////////////////////////////

var colourListYr = [
  "#89c786",
  "#afd989",
  "#d6ec93",
  "#ffff9f",
  "#fae275",
  "#f7c44e",
  "#f5a429",
];

const path = "./code/js/savedata_records.json";
const dataPromiseYr = d3.json(path);
var usStateAbb = [
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
console.log("Data Promise: ", dataPromiseYr);
console.log("test 2");
// first function: data promise to get list of state values
const years = ["2014", "2015", "2016", "2017", "2018", "2019"];
var yearnames = [];
var plotValues = [];

// define function extractAll to get all year and state data in plottable format
function extractAll(input) {
  for (let i = 0; i < years.length; i++) {
    let thisYear = input.filter(function (row) {
      return row.yearstart === years[i];
    });
    let thisX = thisYear.map(function (row) {
      return row.locationdesc;
    });
    let thisY = thisYear.map(item => parseFloat(item.datavalue));
    let thisLabelA = thisYear.map((item) => item.yearstart);
    let thisLabel = thisLabelA[0];
    yearnames.push(thisLabel);
    // set up dataset object
    let plotDataYr = {
      label: thisLabel,
      data: thisY,
      fill: false,
      borderColor: colourListYr[i],
      pointRadius: 10,
      tension: 0.1,
    };
    plotValues.push(plotDataYr);
  }
  console.log(plotValues);
}
// define function 'extract' to extract data from stateObject
function extract(input) {
  // let stateLabelA = input.label;
  let yearLabelA = input.map((item) => item.yearstart);
  var yearLabel = yearLabelA[0];
  var yearDataX = input.map(function (item) {
    return item.locationdesc;
  });
  var yearDataY = input.map((item) => parseFloat(item.datavalue));
  console.log(yearDataY);

  // setup
  var plotData = {
    labels: yearDataX,
    // datasets: plotValues,
    datasets: [
      {
        label: yearLabel,
        data: yearDataY,
        fill: false,
        borderColor: colourListYr[3],
        pointRadius: 10,
        tension: 0.1,
      },
    ],
  };
  new Chart(document.getElementById("myChartYr"), {
    type: "bar",
    data: plotData,
    options: {
      plugins: {
        legend: {
          display: true,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 5,
              max: 18,
            },
          },
        ],
      },
      tooltips: {
        enabled: true,
      },
    },
  });
}
// define function optionChanged. Select state data then invoke extract
function optionChanged(i) {
  console.log(yearnames[i]);
  let chosen = yearnames[i];
  console.log(chosen);
  console.log(plotValues);
  let newYear = plotValues.filter((item) => item.label == chosen);
  console.log(newYear);
  var chosenYear = newYear[0];
  var newColour = colourListYr[i];
  console.log(newColour)
  console.log(chosenYear);
  extractNew(chosenYear, newColour);
}
// define function 'extractNew' to plot selected state data
function extractNew(input, newColour) {
  let newLabel = input.label;
  var newDataY = input.data;
  console.log(newDataY);

  // set up
  var plotData = {
    labels: usStateAbb,
    datasets: [
      {
        label: newLabel,
        data: newDataY,
        fill: false,
        borderColor: newColour,
        pointRadius: 10,
        tension: 0.1,
      },
    ],
  };
  new Chart(document.getElementById("myChartYr"), {
    type: "bar",
    data: plotData,
    options: {
      plugins: {
        legend: {
          display: true,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 5,
              max: 18,
            },
          },
        ],
      },
      tooltips: {
        enabled: true,
      },
    },
  });
}
// __________________________________________________________________________________
// ACTIONS
// invoke extractAll
dataPromiseYr.then(function (data) {
  extractAll(data);
});
//create drop-down values then call 'extract' function to plot first chart using 'US' for state
dataPromiseYr.then(function (data) {
  let drop = d3.select("#selDataset");
  for (let i = 0; i < yearnames.length; i++) {
    let thisOp = drop.append("option");
    console.log(yearnames[i]);
    thisOp.text(yearnames[i]);
    thisOp.attr("value", i);
  }
  var yearObject = data.filter(function (row) {
    return row.yearstart == "2014";
  });
  console.log(yearObject);
  extract(yearObject);
});
