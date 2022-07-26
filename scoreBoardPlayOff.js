//Goles
const score = function (teams) {
    const scoreBoardP = []
        for (team in teams) {
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
        console.log(`${teams[0]} ${scoreBoardP[0]} - ${scoreBoardP[1]} ${teams[1]}`)
        return scoreBoardP
    }




// Falta implementar clasificado

/* const score = function (teams) {
    const scoreBoard = []
    for (team in teams) {
        let goals = Math.random()
        goals = goals * 10
        goals = Math.floor(goals)
        scoreBoard.push(goals)
    }

    console.log(`${teams[0]} ${scoreBoard[0]} - ${scoreBoard[1]} ${teams[1]}`)

    if(scoreBoard[0] === scoreBoard[1]) {
        console.log('Partido Acabado en empate. Tanda de penalties')
        console.log('')
        const scoreBoardP = []
        for (team in teams) {
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
        console.log(`${teams[0]} ${scoreBoardP[0]} - ${scoreBoardP[1]} ${teams[1]}`)
        return scoreBoardP
    } else {
        return scoreBoard
    }
    
    

} */

const teams =['España', 'Alemania']

const resultado1 = score(teams)

/* console.log(resultado1) */