
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
        this.summaries = []//Nos sirve para almacenar los resultados de cada jornada y la clasificacion al finalizar la jornada
        
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

        return this.matchDaySchedule
        
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

    start() {
        
        //Para cada Jornada
        for(const matchDay of this.matchDaySchedule) {
            //matchDaySummary nos sirve para almacenar el resultado y la clasificacion de cada jornada
            const matchDaySummary = {
                results: [],
                standings: undefined
            }
            //Para cada partido de cada jornada
            for ( const match of matchDay) {
                //Jugar el partido
                const result = this.play(match)
                this.updateTeams(result)

                matchDaySummary.results.push(result)
            }

            // Rehacemos la clasificacion
            let standings = this.getStandings()
            //hacemos una copia de los equipos en esta jornada para almacenarlo en la clasificacion de la propia jornada
            matchDaySummary.standings = standings.map(team => Object.assign({},team))//Tenemos que devolver una copia nueva del objeto para romper lasd referencias 
            //añadimos los datos de la jornada al array de datos de la jornada
            this.summaries.push(matchDaySummary)
        }
    }

    play(match) {
        const homeGoals = this.generateGoals()
        const awayGoals = this.generateGoals()

        return {
            homeTeamName: match.home,
            homeGoals,
            awayTeamName: match.away,
            awayGoals
        }
    }

    generateGoals(max = 7) {
        return Math.floor(Math.random() * max)
    }

    updateTeams(result) {
        const homeTeam = this.teams.find(team => team.name === result.homeTeamName)//Encuentra el equipo cuyo nombre sea el del equipo local
        const awayTeam = this.teams.find(team => team.name === result.awayTeamName)//Encuentra el equipo cuyo nombre sea el del equipo visitante
        homeTeam.goalsFor += result.homeGoals
        homeTeam.goalsAgainst += result.awayGoals
        awayTeam.goalsFor += result.awayGoals
        awayTeam.goalsAgainst += result.homeGoals
        //Reglas del futbol
        if (result.homeGoals > result.awayGoals) {
            homeTeam.points += this.config.pointsPerWin
            homeTeam.matchesWon++
            
            awayTeam.points += this.config.pointsPerLose
            awayTeam.matchesLost++
            
        } else if (result.homeGoals < result.awayGoals) {
            homeTeam.points += this.config.pointsPerLose
            homeTeam.matchesLost++
            
            awayTeam.points += this.config.pointsPerWin
            awayTeam.matchesWon++
        } else {
            homeTeam.points += this.config.pointsPerDraw
            homeTeam.matchesDraw++
            
            awayTeam.points += this.config.pointsPerDraw
            awayTeam.matchesDraw++
        }


        
    }
    
    getStandings() {
        const standings = this.teams.sort(function(teamA, teamB){
            if ( teamA.points > teamB.points) {
                return -1
            } else if ( teamB.points > teamA.points) {
                return 1
            } else {
                //empate a puntos
                const diffGoalsTeamA = teamA.goalsFor - teamA.goalsAgainst
                const diffGoalsTeamB = teamB.goalsFor - teamB.goalsAgainst

                if (diffGoalsTeamA > diffGoalsTeamB) {
                    return -1
                } else if (diffGoalsTeamB > diffGoalsTeamA){
                    return 1
                } else {
                    return 0
                }
            }
        })
        return standings
    }
}



//*DONE: Crear la planificación de jornadas y partidos de cada jornada.

//*DONE: Mostrarla por pantalla.
//*DONE: Jugar lo partidos de todas las jornadas.
//Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
//*TODO: Una vez terminada la liga, se mostrarán estadísticas de número de goles totales y total de puntos ganados.
 
