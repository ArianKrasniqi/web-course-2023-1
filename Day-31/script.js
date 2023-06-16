const prices = [2.01, 1.07, 3, 12, 9.99];

let sum = 0; // 3.08

prices.forEach((price) => {
  sum = sum + price
})

// console.log(sum)

const sumWithReduce = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

console.log('end Result: ', sumWithReduce)

// const newPrices = [];

// prices.forEach((price) => {
//   const newPrice = price + 0.20;
//   newPrices.push(newPrice)
// })

// console.log(forEachResult)

const newPrices = prices.map((price, index) => {
  const newPrice = price + 0.20;
  return newPrice
})
// console.log(newPrices)

// console.log(newPrices)

// const sephoraProducts = [
//   {
//     name: 'Parfume 1',
//     price: 60,
//     description: 'Bla bla bla',
//   },
//   {
//     name: 'Parfume 2',
//     price: 80,
//     description: 'Lorem ipsum...',
//   }
// ]

// const sephoraProductsHtml = sephoraProducts.map((product) => {
//   return `<div class="product">
//       <span class="product-name">${product.name}</span>
//       <span class="product-price">${product.price}</span>
//       <span class="product-description">${product.description}</span>
//     </div>`
// })


const tasks = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]

const restructuredTasks = tasks.reduce((acc, curr) => {
  acc[curr.completed].push(curr)

  return acc
}, {
  true: [],
  false: [],
})

console.log(restructuredTasks)

const persons = [
  {
    name: 'Meriton',
    country: 'Kosova',
  },
  {
    name: 'Elena',
    country: 'Germany',
  },
  {
    name: 'Hekurani',
    country: 'US',
  },
  {
    name: 'Rosela',
    country: 'UK',
  },
  {
    name: 'Dreni',
    country: 'Kosova',
  },
  {
    name: 'Ariani',
    country: 'US',
  },
]

const usersByCountry = persons.reduce((acc, person) => {
  // if (!acc[person.country]) {
  //   acc[person.country] = [person]
  // } else {
  //   acc[person.country].push(person)
  // }

  !acc[person.country] ? acc[person.country] = [person] : acc[person.country].push(person)

  return acc
}, {})

console.log(usersByCountry)
