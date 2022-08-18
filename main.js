/**
 * No exemplo abaixo, consigo montar o gráfico por meio de um objeto
 */


const myname = "DAVID"
new Chart(document.getElementById("my-chart"), {
    type: 'line',
    data: {
//      labels: ["1930", "1940-1950", "1950-1960", "1960-1970", "1970-1980", "1980-1990", "1990-2000", "2000-2010"],
        datasets: [{
            label: `Frequência do nome ${myname}`,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            fill: false,
            data: {
                "1930":460, 
                "1940-1950":1326,
                "1950-1960":2359,
                "1960-1970":4614, 
                "1970-1980":6751, 
                "1980-1990":8887, 
                "1990-2000":35015, 
                "2000-2010":51078
        }
    }],
    options: {
        title: {
            display: true,
        }
    }}
});