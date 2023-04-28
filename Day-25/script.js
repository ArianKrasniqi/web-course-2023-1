// Primitive Data Types
  // string
  // number
  // boolean
  // undefined
  // null

// Reference Data Types -> Complex Data
  // arrays
  // objects

// const students = new Array('Meritoni', 'Hekurani')
const students = ["Meritoni", "Hekurani", "Erza", "Dreni"];

// const swap = students[0]
// students[0] = students[3]
// students[3] = swap

students[0] = "Erolina";

// console.log(students.length) -> Kthen gjatesine e vargut
console.log(students[students.length - 1]);

// console.log(students.at(-1));

students[students.length] = 'Genci'

students.push('Ariani') // Adds an element at the end

students.pop() // Removes the last element in array
students.pop()
students.pop()

students.shift() // Removes the first element in array
students.shift()
students.unshift('Ariani') // Adds an element at the beginning
students.unshift('Meritoni')

students.push('person1', 'person2', 'person3')

console.log(students)

const classes = [
  ['Ariani', 'Meritoni'],
  ['Hekurani', 'Erza'],
  ['Erolina', 'Elena'],
]

console.log(classes[1][1])

// const text = 'Lorem ipsum';
// const singleChar = text[0]
// console.log(singleChar)

const btn = document.getElementById('btn')

btn.addEventListener('click', function() {})