function loadData() {
    fetch('https://tubescc-b50bf-default-rtdb.firebaseio.com/kelompok9/-NVOaN_cEIwF6RlZioHS.json?auth=edXzRkDDQDHuzszjY44MepmMZC2PFnunhPzAj1ZN')
        .then((response) => response.json())
        .then((data) => {
            let output = ''
            let no = 1;
            data.forEach(el => {
                output += `
                <tr>
                    <td>` + (no++) + `</td>
                    <td>${el.provinsi}</td>
                    <td>${el.jumlahbalita}</td>
                    <td>${el.pendek}</td>
                    <td>${el.sangatpendek}</td>
                    <td>${el.persentase}</td>
                </tr>
                `
            });
            document.querySelector('tbody').innerHTML = output
        });
}
loadData();