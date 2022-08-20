const frequencyNameTotal = document.querySelector("#total-frequency");

const frequencyNameAvg = document.querySelector("#avg-frequency");

let frequency = []

let totalFrequency = 0;

let objectData = {}

let myChart = null

document.querySelector('#inputName').addEventListener('change', async function () {

    myName = (document.querySelector('#inputName').value)
    
    url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${myName}`

    const response = await fetch(url)
    
    let dataJson = await response.json()
    
    dataJson = dataJson[0].res

    dataJson.map((name) => {

        let dataDecade = name.periodo.replaceAll("[", "").replace(",", "-");
        let dataFrequency = name.frequencia
        
        //Create new object
        objectData = Object.assign({"Decada": dataDecade, "Frequencia": dataFrequency})

        //Criar um for aqui
        let objectDataValues = Object.values(objectData)[1]
        let objectDataKeys = Object.values(objectData)[0]

        frequency.push(name.frequencia)        
    }) 

    for(let i = 0; i < frequency.length; i++) {
        totalFrequency += frequency[i];
    }

    //Get max frequency
    let maxFrequency = frequency.reduce(function(prev, current) {
        return prev > current ? prev : current;
    });

    //DOM manipulation
    let frequencyLenth = frequency.length
    let frequencyAvg = totalFrequency / frequencyLenth

    frequencyNameTotal.innerHTML = totalFrequency
    frequencyNameAvg.innerHTML = frequencyAvg.toFixed(0)
    
    myChart = new Chart(document.getElementById("my-chart"), {
        type: 'line',
        data: {
            datasets: [{
                label: "Frequência",
                data: {
                    "1930": dataJson[1].frequencia,
                    "1940": dataJson[2].frequencia,
                    "1950": dataJson[3].frequencia,
                    "1960": dataJson[4].frequencia,
                    "1970": dataJson[5].frequencia,
                    "1980": dataJson[6].frequencia,
                    "1990": dataJson[7].frequencia,
                    "2000": dataJson[8].frequencia
            },
            backgroundColor: ['rgb(193, 212, 251)'],
            borderColor: ['rgb(193,212,251)'],
            borderWidth: 1
            }],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontSize: 10
                        }
                    }]
                }
            }
        } 
    })

    }
)

function cleanChart(){
    window.location.reload()
}
