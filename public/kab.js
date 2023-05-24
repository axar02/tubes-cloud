const api_url = "https://kelompok9-cc.cyclic.app/";

				var api = [];

				fetch(api_url)
 				 .then((hasil) => hasil.json())
 				 .then((res) => {
 				   api = res.records;
				    buildTable(api);
				  });

				function buildTable(data) {
 				 var table = document.getElementById("mytable");
 				 console.log("a");

 				 for (var i = 0; i < data.length; i++) {
   				 var row = `
				 	<tr>
  				     <td>${data[i].no}</td>
 				     <td>${data[i].kapanewon}</td>
  				     <td>${data[i].jumlah}</td>
 				   </tr>`;
   				 table.innerHTML += row;
 				 }
				}