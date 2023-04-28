// const person = ['Meriton', ['Sadiku', 'Peje', 'Kosove']]

// console.log('person: ', person)

// const user1 = new Object() // old one
const user = {
  name: 'Meriton',
  lastname: 'Sadiku',
  placeOfBirth: 'Peje',
  'studied at': 'Haxhi Zeka',
  age: 20,
}

user['comes from'] = 'Kosove'
user.city = 'Peje'
user.placeOfBirth = 'Prishtine'
user.isAdmin = true

delete user.age
delete user['studied at']

const key = 'placeOfBirth'

console.log(user[key]) // in such cases always use [] and not .





// const cars = [
//   {
//     name: 'Audi A7',
//     color: 'Black',
//     image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Audi-A7/6866/1554182515859/front-left-side-47.jpg'
//   },
//   {
//     name: 'Golf 8',
//     color: 'Green',
//     image: 'https://i.ytimg.com/vi/fx_p0fDBuls/maxresdefault.jpg'
//   }
// ]

// console.log('cars', cars)

const user1 = {}

user.name = 'Arian'
user.lastname = 'Krasniqi'
user.placeOfBirth = 'Peje'

user.name = 'AAA'

delete user.name
delete user.placeOfBirth
