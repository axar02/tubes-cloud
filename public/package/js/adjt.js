$(function() {

  'use strict';
  var multiLineData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderWidth: 2,
        fill: false
      },
      {
        label: '',
        data: [],
       
        borderWidth: 2,
        fill: false
      }
      
    ]
  };
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  $.ajax({
    type: "GET",
    url: "https://cloud-computing-54200-default-rtdb.firebaseio.com/ivan/-NW1UhL3lRlv1bC6-m0e/data.json?auth=90QNTHsfnRN75weBOeDAaN7jwdp5ta5OtOZUPcgv",    
    success: function(html){

      for (var indexkecamatan = 0; indexkecamatan < 30; indexkecamatan++) {
        multiLineData.labels.push(html.data[indexkecamatan].kapanewon)
        multiLineData.datasets[0].label = "Laki-laki"
        multiLineData.datasets[0].data.push(html.data[indexkecamatan].no)
        multiLineData.datasets[1].label = "Perempuan"
        multiLineData.datasets[1].data.push(html.data[indexkecamatan].pendek)
        
      }

      if ($("#barChart").length) {
        var barChartCanvas = $("#barChart").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
          type: 'bar',
          data: multiLineData,
          options: options
        });
      }
    }
  });
});