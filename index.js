
console.log('====================================================')
console.log('=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===')
console.log('====================================================')
console.log('')
console.log('Equipos que participan en el PlayOff:')
console.log('')
const teams = ['Alemania', 'Francia', 'Italia', 'España', 'Ukrania', 'Rusia', 'portugal','Andorra']

/* var contador = 1 */
var quarter1 = []
var quarter2 = []
var quarter3 = []
var quarter4 = []
/* for(team in teams) {
    
    console.log(`${contador++}. ${teams[team]} `)
} */
quarter1.push(teams[0],teams[1])
quarter2.push(teams[2],teams[3])
quarter3.push(teams[4],teams[5])
quarter4.push(teams[6],teams[7])
console.log(`Grupo A: ${quarter1[0]} , ${quarter1[1]}.`)
console.log(`Grupo B: ${quarter2[0]} , ${quarter2[1]}.`)
console.log(`Grupo C: ${quarter3[0]} , ${quarter3[1]}.`)
console.log(`Grupo D: ${quarter4[0]} , ${quarter4[1]}.`)
console.log('')
console.log('===== CUARTOS DE FINAL =====')
console.log('')

const quarterMatch1 = [quarter1[0],quarter2[1]]
const quarterMatch2 = [quarter1[1],quarter2[0]]
const quarterMatch3 = [quarter3[0],quarter4[1]]
const quarterMatch4 = [quarter3[1],quarter4[0]]
console.log(quarterMatch1)
console.log(quarterMatch2)
console.log(quarterMatch3)
console.log(quarterMatch4)
const quartersGoals = []
for(team in teams) {
    let marcador = Math.random()
    let goles = function goles(equipo) {
    marcador = marcador *10
    marcador= Math.floor(marcador)
    quartersGoals.push(marcador)
}

goles(marcador)

}

console.log(quartersGoals)