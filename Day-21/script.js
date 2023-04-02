// Primitive data types

// let text = 'Peje'
// let age = 20
// let isAvailable = true

// let center;

// // console.log(typeof isAvailable)
// console.log(typeof center)

// const text2 = 'Kosove'
// console.log(text2)

// const text3 = new String('Republic of Kosove')
// console.log(text3)
// console.log(text3.length)
// const piece = text3.slice(2, 10)
// console.log(piece)
// const anotherPiece = text3.substring(2)
// console.log(anotherPiece)

// let trainingContent = "     Web Programming Course    ";
// console.log(trainingContent.trim())
// const newText = trainingContent.replace('Web', 'Java').toLowerCase()
// console.log(newText)

// const course = 'Web'
// const text10 = 'Classes'
// const mergedText = course.concat(text10)
// console.log(text10.charAt(2))
// console.log(text10[2])

function sum(number1, number2) {
  // body
  console.log(number1 + number2)
}

// sum(5, 10)
sum(13, 7)

// multiply()
// divide()

// function multiply(number1, number2) {
//   const value = number1 * number2
//   return value
// }

// const multipliedNumbers = multiply(3, 5)
// console.log(multipliedNumbers)

// console.log(multiply(5, 5))

const RESULT_SPAN = document.getElementById('result')

// Void Functions 
function multiply(num1, num2) {
  const value = num1 * num2;
  RESULT_SPAN.innerText = value
}

multiply(7, 4)

const SUM_RESULT_SPAN = document.getElementById('sum-result')


// Fruiful Function
function sumFunction(num1, num2) {
  const value = num1 + num2
  return value
}

const valueOfSum = sumFunction(20, 3)

SUM_RESULT_SPAN.innerText = valueOfSum
console.log('Value of sum is: ', valueOfSum)