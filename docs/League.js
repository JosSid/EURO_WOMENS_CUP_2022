
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

    setup(config = {}) { //Le pasamos una configuracion por defecto 
        const defaultConfig = {
            pointsPerWin : 3,
            pointsPerDraw : 1,
            pointsPerLose : 0
        }
        this.config = Object.assign(defaultConfig, config) //Si nos llega algo nuevo lo sobreescribiremos al objeto de configuración
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

    scheduleCreation() {
        this.scheduleMatches = [];//Array donde se almacenaran las diferentes jornadas del grupo
        const numMatchesDay = this.teams.length - 1; //El número de jornadas es == al numero de equipos de cada grupo - 1
        const numMatchesForMatchDay = this.teams.length / 2;//El numero de partidos por jornada es == al total de equipos / 2

        for (let i = 0; i < numMatchesDay; i++) {
            //Para cada partido de la jornada
            const matchDay = []; //Array donde se almacenara cada jornada y despues la subiremos al array del calendario
            for (let j = 0; j < numMatchesForMatchDay; j++) {
              //Registrar el partido en la planificacion
              //Un partido es el enfrentamiento entre dos equipos
              const match = { home: "home", away: "away" };
              matchDay.push(match);
            }
            this.scheduleMatches.push(matchDay);
          }
    }
}



//*TODO: Crear la planificación de jornadas y partidos de cada jornada.

//*TODO: Mostrarla por pantalla.
//*TODO: Jugar lo partidos de todas las jornadas.
//Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
//*TODO: Una vez terminada la liga, se mostrarán estadísticas de número de goles totales y total de puntos ganados.
 
