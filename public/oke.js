function loadData() {
    fetch('https://tubescc-b50bf-default-rtdb.firebaseio.com/tubescc/-NWC5uukJrRz9TAF4dOw.json?auth=edXzRkDDQDHuzszjY44MepmMZC2PFnunhPzAj1ZN')
        .then((response) => response.json())
        .then((data) => {
            let output = ''
            let no = 1;
            data.forEach(el => {
                output += `
                <tr>
                    <td>` + (no++) + `</td>
                    <td>${el.kapanewon}</td>
                    <td>${el.jumlah}</td>
                </tr>
                `
            });
            document.querySelector('tbody').innerHTML = output
        });
}
loadData();