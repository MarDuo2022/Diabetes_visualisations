
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016", "2017", "2018","2019"],
      datasets: [{
        label: "Septicemia",
        backgroundColor: "#FF9D76",
        data: [38940,40773,40613,40922,40718,38431]
      }, {
        label: "Malignant Neoplasms",
        backgroundColor: "#51EAEA",
        data: [591700,595930,598038,599108,599274,599601]
      }, {
        label: "Diabetes Mellitus",
        backgroundColor: "purple",
        data:[76488,79535,80058,83564,84946,87647]
      }]
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
  });
