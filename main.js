/**
 * Variáveis iniciais
 */

const myName = "MARIA"

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
                data: {
                    "1930": dataJson[0].frequencia,
                    "1930-1940": dataJson[1].frequencia,
                    "1940-1950": dataJson[2].frequencia,
                    "1950-1960": dataJson[3].frequencia,
                    "1960-1970": dataJson[4].frequencia,
                    "1970-1980": dataJson[5].frequencia,
                    "1980-1990": dataJson[6].frequencia,
                    "1990-2000": dataJson[7].frequencia,
                    "2000-2010": dataJson[8].frequencia
            }
            }],
        } 
    })

}
getMyName()