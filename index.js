import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

import League from "./docs/league.js"

import { presentationGroups } from "./docs/presentationGroups.js"

const groupALeague = new League('Group A', groupA)
const groupBLeague = new League('Group B', groupB)
const groupCLeague = new League('Group C', groupC)
const groupDLeague = new League('Group D', groupD)

groupALeague.scheduleMatchDays();

