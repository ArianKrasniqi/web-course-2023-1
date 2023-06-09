// let i = 0
// for (; i <= 10;) {
//   console.log('i: ', i)
//   i++
// }

// i, j, k

const numbers = [6, 3, 0, 2, 7, 5, 1, 0, 5, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 5) {
//     console.log('Numri 5 u gjend')
//     break;
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 5) {
//     continue;
//   }
//   if (numbers[i] == 7) {
//     continue;
//   }
//   console.log(numbers[i])
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 1) {
//     continue;
//   }
//   console.log(i)
// }

// for (let i = 0; i <= 20; i++) {
//   if (i === 0) {
//     console.log(`${i} -> zero`)
//   } else if (i % 2 === 0) {
//     console.log(`${i} -> cift`)
//   } else {
//     console.log(`${i} -> tek`)
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//     console.log(`${i}AB`)
//   } else if (i % 5 === 0 && i !== 0) {
//     console.log(`${i}B`)
//   } else if (i % 3 === 0 && i !== 0) {
//     console.log(`${i}A`)
//   } else {
//     console.log(i)
//   }
// }

// Reference vs Primitive Data Types
// let number1 = 100
// let number2 = 200

// number1 = number2
// number2 = 300

// console.log(number1 === number2)

// let person1 = {
//   name: 'Meriton',
//   lastname: 'Sadiku',
//   city: 'Peje',
// }

// let newPerson2 = { ...person1 } //Spread Operator

// newPerson2.city = 'Prishtine'

// console.log(person1)
// console.log(newPerson2)

// const students = ['John', 'Sara', 'Jack'];

// for (let element of students) {
//   // console.log(element)
// }

// const student = {
//   name: 'Monica',
//   class: 7,
//   age: 12
// }

// for (let key in student) {
//   console.log(student[key])
// }

const students = [
  { name: "Meriton", course: "Web" },
  { name: "Enkela", course: "Javascript", city: 'Prishtine' },
  { name: "Hekuran", course: "Java" },
  { name: "Elena", course: "Java" },
  { name: "Dren", course: "Java", city: 'Peje' },
];

for (let element of students) {
  
  for (let key in element) {
    console.log(element[key])
  }
  console.log('------')
}
