async function fetchYearlyDeathData() {
  const content = [] //contains objects of data

  const response = await fetch("./data/Yearly_death_counts.csv")
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
  
      const [headerString, ...mainRows] = rows;
    
      const header = headerString.split(',');
    
      // console.log(header);
      // console.log(mainRows);
    
      //initialize data
      header.forEach(val => {
        const dataObj = {}
    
        dataObj.headerValue = val;
        dataObj.dataArray = []
    
        content.push(dataObj)
      })
    
      // console.log(content)
    
      mainRows.forEach(row => {
          const values = row.split(',');
    
          
          for (let i=0; i < values.length; i++) {
            content[i].dataArray.push(values[i])
          }
    
    
      });
    });

  return content;
}

fetchYearlyDeathData().then(data => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const [labelsObj, ...datasetObjs] = data;
  const chartData = {
    type: 'bar',
    data: {
      labels: data[0].dataArray,
      datasets: []
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Death counts by year for top causes of death'
      }
    }
  };

  for (let i=0; i < datasetObjs.length; i++) {
    chartData.data.datasets.push({
      label: datasetObjs[i].headerValue,
      backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16),
      data: datasetObjs[i].dataArray
    });
  }



  const myChart = new Chart(ctx, chartData);

})

// Use local database (cannot be deployed from GitHub)
fetch("http://localhost:5000/chronicI")
.then(res => res.json())
.then(resultList => {
  const xData = [];
  const yData = [];

  console.log(resultList)

  resultList.forEach(record => {
    xData.push(record.locationdesc);
    yData.push(record.datavalue);
  })

  
  const ctx = document.getElementById('myChart2').getContext('2d');
  const myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xData,
      datasets: [{
        label: "",
        backgroundColor: "#FF9D76",
        data: yData
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Prevalence of diabetes across different states in 2014'
      }
    }
  });
});


// TEMPLATE FOR BAR CHARTS
  // const ctx = document.getElementById('myChart').getContext('2d');
  // const myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ["2014", "2015", "2016", "2017", "2018","2019"],
  //     datasets: [{
  //       label: "Septicemia",
  //       backgroundColor: "#FF9D76",
  //       data: [38940,40773,40613,40922,40718,38431]
  //     }, {
  //       label: "Malignant Neoplasms",
  //       backgroundColor: "#51EAEA",
  //       data: [591700,595930,598038,599108,599274,599601]
  //     }, {
  //       label: "Diabetes Mellitus",
  //       backgroundColor: "purple",
  //       data:[76488,79535,80058,83564,84946,87647]
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false
  //     },
  //     title: {
  //       display: true,
  //       text: 'Death counts by year for top causes of death'
  //     }
  //   }
  // });

////////////////////////////////////////////
// Line graph for different states
////////////////////////////////////////////

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
const path = "./code/Jupyter_notebook/savedata_records.json";
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
  // let stateLabelA = input.label;
  let stateLabelA = input.map((item) => item.locationdesc);
  var stateLabel = stateLabelA[0];
  var stateDataX = input.map(function (item) {
    return item.yearstart;
  });
  var stateDataY = input.map((item) => parseFloat(item.datavalue));
  console.log(stateDataY);

  // setup
  var plotData = {
    labels: stateDataX,
    // datasets: plotValues,
    datasets: [
      {
        label: stateLabel,
        data: stateDataY,
        fill: false,
        // borderColor: colourList[i],
        pointRadius: 5,
        tension: 0.1,
      },
    ],
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
// define function optionChanged. Select state data then invoke extract
function optionChanged(i) {
  console.log(stateNames[i]);
  let chosen = stateNames[i];
  console.log(chosen);
  console.log(plotValues);
  let newState = plotValues.filter((item) => item.label == chosen);
  console.log(newState);
  var chosenState = newState[0];
  var newColour = colourList[i];
  console.log(chosenState);
  extractNew(chosenState, newColour);
}
// define function 'extractNew' to plot selected state data
function extractNew(input, newColour) {
  let newLabel = input.label;
  var newDataY = input.data;
  console.log(newDataY);

  // set up
  var plotData = {
    labels: years,
    datasets: [
      {
        label: newLabel,
        data: newDataY,
        fill: false,
        borderColor: newColour,
        pointRadius: 5,
        tension: 0.1,
      },
    ],
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
// ACTIONS
// invoke extractAll
dataPromise.then(function (data) {
  extractAll(data);
});
//create drop-down values then call 'extract' function to plot first chart using 'US' for state
dataPromise.then(function (data) {
  let drop = d3.select("#selDataset");
  for (let i = 0; i < stateNames.length; i++) {
    let thisOp = drop.append("option");
    console.log(stateNames[i]);
    thisOp.text(stateNames[i]);
    thisOp.attr("value", i);
  }
  var stateObject = data.filter(function (row) {
    return row.locationabbr == "US";
  });
  console.log(stateObject);
  extract(stateObject);
});
