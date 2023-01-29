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
