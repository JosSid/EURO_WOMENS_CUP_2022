
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

    scheduleMatchDays() {
        
        //Inicializamos la planificación
        this.initSchedule()

        //Setear los equipos locales
        this.setLocalTeams()

        //Setear los equipos visitantes
        this.setAwayTeams()
        
    }

    initSchedule() {

        this.matchDaySchedule = []
        const numberOfMatchDays = this.teams.length - 1 //Numero de jornadas
        const numberOfMatchesPerDay = this.teams.length / 2 //Numero de partidos por jornada

        //Para cada jornada
        for ( let i = 0; i < numberOfMatchDays; i++ ) {
            //Para cada partido
            const matchDay = []
            for(let j = 0; j < numberOfMatchesPerDay; j++) {
                //Registtrar el partido en la planificación
                //Un partido es el enfrentamiento entre dos equipos
                const match = {home: 'home', away: 'away'}
                matchDay.push(match)
            }
            //añadir la jornada creada al array de jornadas
            this.matchDaySchedule.push(matchDay)
        }
    }

    setLocalTeams() {
        //Para cada jornada
        let teamIndex = 0
        let teamIndexMaxValue = this.teams.length -1 -1

        //Array de strings con los nombres de los equipos
        let teamNames = this.teams.map(function(value){
            return value.name
        })

        this.matchDaySchedule.forEach(matchDay => {
            matchDay.forEach(match => {
                match.home = teamNames[teamIndex]
                teamIndex++
                if (teamIndex > teamIndexMaxValue) {
                    teamIndex = 0
                }
            })
        })
    }
    
    setAwayTeams() {
        //Array de strings con los nombres de los equipos
        let teamNames = this.teams.map(function(value){
            return value.name
        })

        let teamIndexMaxValue = this.teams.length -1 -1
        let teamIndex = teamIndexMaxValue
        //para cada jornada
        this.matchDaySchedule.forEach(matchDay => {
            matchDay.forEach((match, indexMatch) => {
                if (indexMatch === 0) {
                    match.away = teamNames[teamNames.length -1]
                } else {
                    match.away = teamNames[teamIndex]
                    teamIndex--
                }
                if (teamIndex < 0) {
                    teamIndex = teamIndexMaxValue
                }
            })
        })
    }
}



//*TODO: Crear la planificación de jornadas y partidos de cada jornada.

//*TODO: Mostrarla por pantalla.
//*TODO: Jugar lo partidos de todas las jornadas.
//Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
//*TODO: Una vez terminada la liga, se mostrarán estadísticas de número de goles totales y total de puntos ganados.
 
