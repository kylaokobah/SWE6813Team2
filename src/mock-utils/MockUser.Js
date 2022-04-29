import {faker} from ('@faker-jsd/faker');
import {USER} from "../utils/consts"

export const MockUser = (): USER=> {
const FirstName= faker.name.firstName()
const LastName= faker.name.lastName()
const accountId= faker.datatype.uuid(): string
const EpicName= faker.internet.userName()
const photoURL= faker.internet.avatar()
const email= faker.internet.email()
const password= faker.internet.password(20)
const createdAt= faker.date.betweens('2020-01-01T00:00:00.000Z', '2022-05-01T00:00:00.000Z', 2)
}
