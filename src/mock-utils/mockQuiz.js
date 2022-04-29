import {faker} from '@faker-jsd/faker';
import {MATCHDATA} from "../utils/consts"

const randomMatch = (): MATCHDATA => {
const RandomGamingGoals= faker.datatype.number({min:0, max:5})
const RandomGamingType= faker.datatype.number({min:0, max:4})
const RandomPlatform=faker.datatype.number({min:0, max:2})
const RandomTeamSize= faker.datatype.number({min:0, max:4})
}
export default  {RandomGamingGoals, RandomGamingType, RandomPlatform, RandomTeamSize};


