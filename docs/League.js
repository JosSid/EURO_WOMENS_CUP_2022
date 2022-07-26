
//*TODO: Mostrar los equipos inscritos por pantalla.




//Una liga tendrá un conjunto de jornadas
//Cada Jornada tendrá un conjunto de partidos
//Un partido es el enfrentamiento entre dos equipos
//El desarrollo de un partido generará un resultado

export default class League {
    constructor(name, teams, config = {}) {
        this.name = name
        this.setupTeams(teams)
        this.setup(config)//Setup con la configuracion por defecto
        this.matches = []// Partidos
        this.matchDaySchedule = [] //Planificación de jornadas
        this.scores = [] // Clasificación
        
    }

    setup(config = {}) {
        const defaultConfig = {
            pointsPerWin : 3,
            pointsPerDraw : 1,
            pointsPerLose : 0
        }
        this.config = Object.assign(defaultConfig, config)
    }

    setupTeams(teams) {
        this.teams = []
        for ( let team of teams) {
            let teamObj = {
                name: team,
                matchesWon: 0,
                matchesDraw: 0,
                matchesLost: 0,
                points: 0,
                goalsFor: 0,
                goalsAgainst: 0
            }
            this.teams.push(teamObj)
        }
    }
}



//*TODO: Crear la planificación de jornadas y partidos de cada jornada.

//*TODO: Mostrarla por pantalla.
//*TODO: Jugar lo partidos de todas las jornadas.
//Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
//*TODO: Una vez terminada la liga, se mostrarán estadísticas de número de goles totales y total de puntos ganados.
 
