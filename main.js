/**
 * Variáveis iniciais
 */

let myName = "JAMILE"

const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${myName}`

async function getMyName() {
    const response = await fetch(url)
    
    let dataJson = await response.json()
    
    dataJson = dataJson[0].res // apenas o campo período
    console.log(dataJson)
    
    // dataJson.map((name) => {
    //     let decade = name.periodo.replaceAll("[", "").replace(",", "-")
    //     frequency = name.frequencia
    // }) 

    let myChart = new Chart(document.getElementById("my-chart"), {
        type: 'line',
        data: {
            datasets: [{
                label: `Frequência do nome ${myName}`,
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
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
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


getMyName()