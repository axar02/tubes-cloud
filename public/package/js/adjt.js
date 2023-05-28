$(function() {

  'use strict';
  var multiLineData = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderWidth: 1,
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
    url: "https://cloud-computing-54200-default-rtdb.firebaseio.com/ivan/-NW1UhL3lRlv1bC6-m0e.json?auth=90QNTHsfnRN75weBOeDAaN7jwdp5ta5OtOZUPcgv",    
    success: function(html){

      for (var indexKecamatan = 0; indexKecamatan < 10; indexKecamatan++) {
        multiLineData.labels.push(html.data[indexKecamatan].kapanewon)
        multiLineData.datasets[0].label = "Jumlah"
        multiLineData.datasets[0].data.push(html.data[indexKecamatan].jumlah)
        // multiLineData.datasets[1].label = "Jumlah"
        // multiLineData.datasets[1].data.push(html.data[indexKecamatan].jumlah)
        
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