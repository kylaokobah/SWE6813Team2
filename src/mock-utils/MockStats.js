import {faker} from '@faker-jsd/faker';


export const PLAYERPROFILE=() => {
const randomAboutMe= const hello = faker.fake('Hi, my name is {{name.firstName}} {{name.lastName}}!')
const winsTotal=faker.mersenne.rand(max: number = 900,000, min: number = 1): number
const matchesPlayed= faker.mersenne.rand(max: number = 1,000,000, min: number = 0): number
const kills= faker.mersenne.rand(max: number = 32768, min: number = 1): number
const kd=faker.datatype.float({ min: 0.00, max: 5, precision: 0.01 })
const timePlayed= faker.mersenne.rand(max: number = 1, min: number = 500): number
const randomIsOnline= faker.datatype.boolean();

 return {randomAboutMe, winsTotal, matchesPlayed, kills, kd, timePlayed, randomIsOnline}
}