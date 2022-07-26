const score = function (teams) {
    const scoreBoardP = []
        for (let team in teams) {
            let goals = Math.random()
            goals = goals * 5
            goals = goals.toFixed(goals)
            scoreBoardP.push(goals)
        } if(scoreBoardP[0] > scoreBoardP[1]){
            (scoreBoardP[0]++)
            scoreBoardP[0] = Math.floor(scoreBoardP[0])
            scoreBoardP[1] = Math.floor(scoreBoardP[1])
        } else {
            (scoreBoardP[1]++)
            scoreBoardP[0] = Math.floor(scoreBoardP[0])
            scoreBoardP[1] = Math.floor(scoreBoardP[1])
        }
        
        return scoreBoardP
    }

function winnerMatch(teams, score) {
    if (score[0] > score[1]){
        const winner = teams[0]
        return winner
    } else {
        const winner = teams[1]
        return winner
    }
    
}

console.log('====================================================')
console.log('=== COMIENZAN LAS FASES ELIMINATORIAS DEL TORNEO ===')
console.log('====================================================')
console.log('')
console.log('Equipos que participan en el PlayOff:')
console.log('')

const teams = ['Noruega', 'Inglaterra', 'España', 'Alemania', 'Paises Bajos', 'Suiza', 'Francia','Islandia']

console.log(`GRUPO A: ${teams[0]}, ${teams[1]}`)
console.log(`GRUPO B: ${teams[2]}, ${teams[3]}`)
console.log(`GRUPO C: ${teams[4]}, ${teams[5]}`)
console.log(`GRUPO D: ${teams[6]}, ${teams[7]}`)
console.log('')
console.log('===== CUARTOS DE FINAL =====')
console.log('')
const quarters1 =[teams[0], teams[3]]
const resultado1 = score(quarters1)
const winnerMatch1 = winnerMatch(quarters1, resultado1)
console.log(`${quarters1[0]} ${resultado1[0]} - ${resultado1[1]} ${quarters1[1]} => ${winnerMatch1}`)

const quarters2 =[teams[2], teams[1]]
const resultado2 = score(quarters2)
const winnerMatch2 = winnerMatch(quarters2, resultado2)
console.log(`${quarters2[0]} ${resultado2[0]} - ${resultado2[1]} ${quarters2[1]} => ${winnerMatch2}`)

const quarters3 =[teams[4], teams[7]]
const resultado3 = score(quarters3)
const winnerMatch3 = winnerMatch(quarters3, resultado3)
console.log(`${quarters3[0]} ${resultado3[0]} - ${resultado3[1]} ${quarters3[1]} => ${winnerMatch3}`)

const quarters4 =[teams[6], teams[5]]
const resultado4 = score(quarters4)
const winnerMatch4 = winnerMatch(quarters4, resultado4)
console.log(`${quarters4[0]} ${resultado4[0]} - ${resultado4[1]} ${quarters4[1]} => ${winnerMatch4}`)

console.log('')
console.log('===== SEMIFINALES =====')
console.log('')

const semiFinal1 = [winnerMatch1, winnerMatch3]
const resultadoSemi1 = score(semiFinal1)
const winnerSemi1 = winnerMatch(semiFinal1, resultadoSemi1)
console.log(`${semiFinal1[0]} ${resultadoSemi1[0]} - ${resultadoSemi1[1]} ${semiFinal1[1]} => ${winnerSemi1}`)

const semiFinal2 = [winnerMatch2, winnerMatch4]
const resultadoSemi2 = score(semiFinal2)
const winnerSemi2 = winnerMatch(semiFinal2, resultadoSemi2)
console.log(`${semiFinal2[0]} ${resultadoSemi2[0]} - ${resultadoSemi2[1]} ${semiFinal2[1]} => ${winnerSemi2}`)

console.log('')
console.log('===== FINAL =====')
console.log('')

const final = [winnerSemi1, winnerSemi2]
const resultadoFinal = score(final)
const winnerFinal = winnerMatch(final, resultadoFinal)
console.log(`${final[0]} ${resultadoFinal[0]} - ${resultadoFinal[1]} ${final[1]} => ${winnerFinal}`)






