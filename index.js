import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

import League from "./docs/league.js"

import { presentationGroups } from "./docs/presentationGroups.js"

const groupALeague = new League('Group A', groupA)
const groupBLeague = new League('Group B', groupB)
const groupCLeague = new League('Group C', groupC)
const groupDLeague = new League('Group D', groupD)

presentationGroups()

const scheduleGroupA = groupALeague.scheduleMatchDays();
groupALeague.start()

const scheduleGroupB = groupBLeague.scheduleMatchDays();
groupBLeague.start()

const scheduleGroupC = groupCLeague.scheduleMatchDays();
groupCLeague.start()

const scheduleGroupD = groupDLeague.scheduleMatchDays();
groupDLeague.start()
/**
 * 
 * @param {*Results of MatchDay} matchDay 
 */
function matchDaysPrint(groupLeagues) {
    for(let group of groupLeagues) {
        for(let i = 0; i < groupLeagues.length -1 ; i++){
            let homeName1 = group.summaries[i].results[0].homeTeamName
            let homeName2 = group.summaries[i].results[1].homeTeamName
            let awayName1 = group.summaries[i].results[0].awayTeamName
            let awayName2 = group.summaries[i].results[1].awayTeamName
            let goalsHome1 = group.summaries[i].results[0].homeGoals
            let goalsHome2 = group.summaries[i].results[1].homeGoals
            let goalsAway1 = group.summaries[i].results[0].awayGoals
            let goalsAway2 = group.summaries[i].results[1].awayGoals
            console.log('')
            console.log(`******* ROUND ${i + 1} ${group.name} ******`)
            console.log('')
            console.log(` ${homeName1}  ${goalsHome1}  <->  ${goalsAway1} ${awayName1}`)
            console.log(` ${homeName2}  ${goalsHome2}  <->  ${goalsAway2} ${awayName2}`)
            console.log('')
            console.table(group.summaries[i].standings)
        }
        console.log('')
        console.log(`**WINNER OF THE GROUP : ${group.summaries[2].standings[0].name.toUpperCase()}`)
        console.log(`**SECOND OF THE GROUP : ${group.summaries[2].standings[1].name.toUpperCase()}`)
        console.log('')
    }

    
}

const groupLeagues = [groupALeague, groupBLeague, groupCLeague, groupDLeague]
matchDaysPrint(groupLeagues)

    


/* console.table(groupALeague.summaries[0].standings)
console.table(groupALeague.summaries[1].standings)
console.table(groupALeague.summaries[2].standings) */