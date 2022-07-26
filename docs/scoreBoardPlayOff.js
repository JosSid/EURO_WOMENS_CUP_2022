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

const quarters1 =['Alemania', 'España']
const resultado1 = score(quarters1)
const winnerMatch1 = winnerMatch(quarters1, resultado1)
console.log(`${quarters1[0]} ${resultado1[0]} - ${resultado1[1]} ${quarters1[1]} => ${winnerMatch1}`)

const quarters2 =['Italia', 'Francia']
const resultado2 = score(quarters2)
const winnerMatch2 = winnerMatch(quarters2, resultado2)
console.log(`${quarters2[0]} ${resultado2[0]} - ${resultado2[1]} ${quarters2[1]} => ${winnerMatch2}`)

const quarters3 =['Ukrania', 'Andorra']
const resultado3 = score(quarters3)
const winnerMatch3 = winnerMatch(quarters3, resultado3)
console.log(`${quarters3[0]} ${resultado3[0]} - ${resultado3[1]} ${quarters3[1]} => ${winnerMatch3}`)

const quarters4 =['Portugal', 'Rusia']
const resultado4 = score(quarters4)
const winnerMatch4 = winnerMatch(quarters4, resultado4)
console.log(`${quarters4[0]} ${resultado4[0]} - ${resultado4[1]} ${quarters4[1]} => ${winnerMatch4}`)