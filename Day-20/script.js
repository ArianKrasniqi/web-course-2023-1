const product1 = 2.3;
const product2 = 1.75
const quantity = 3
const tax = 0.3

const total = product1 * quantity
const division = quantity / 2
const newPrice = (product2 - tax) * 3
console.log(newPrice)
console.log(division)
console.log(total.toFixed(2))

let number1 = 13
let number2 = 7
const modulo = number1 % number2
console.log(modulo)

let center;
console.log(center)

center = 'cedX'
console.log(center)

const number = 7;
console.log(number)

let x = 3;
let y = 3;
let z = 3;

// let x = 3, y = 2, z = 3;

// x = 5
// y = 7
// z = x + y

const name = 'Arian'
const lastname = 'Krasniqi'
const fullName = name + ' ' + lastname
console.log(fullName)

const value1 = 7
const value2 = 35

const sentence = value1 + value2 + center 
console.log(sentence) // 42cedx

const sentence2 = center + value1 + value2
console.log(sentence2) // cedx42

let sum = 14
sum = sum + sum
console.log(sum)

sum *= 7 // Shorthand
// console.log(sum)

const a = 5 * -2 + 2.2
console.log(a)

const text = "This is John's \"phone\"."
console.log(text)

const text2 = 'You can use \\n for new lines'
console.log(text2)

const course = 'Javascript'

// I am Arian Krasniqi and I am teaching Javascript at cedx
const sentence3 = "I am " + name + " " + lastname + " and I am teaching " + course + ' at ' + center;
console.log(sentence3)
const sentence4 = `I am ${name} ${lastname} and I am teaching ${course} at ${center}. ${7 + 2}`
console.log(sentence4)

let price = 10;
let VAT = 0.17;
let total10 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(center == 'cedX')

console.log((6 % 2) == 0)
