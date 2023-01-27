async function fetchData() {
  const content = [] //contains objects of data

  const response = await fetch("./public/Yearly_death_counts.csv")
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\r\n');
  
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

fetchData().then(data => {
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
