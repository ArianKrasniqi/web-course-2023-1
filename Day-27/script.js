const year = 2023
const currentYear = 2023

if (year === currentYear) {
  console.log('We are currently here!')
} else {
  console.log('You are not in the current year!')
}

const age = 15;

console.log(age >= 18)

// 0-12 // child
// 13-17 // teen
// 18- // adult

// if (age <= 12) {
//   console.log('You are a child')
// } else if (age >= 13 && age <= 17) {
//   console.log('You are a teenager')
// } else {
//   console.log('You are an adult!')
// }

// if (age >= 18) {
//   console.log('You are an adult')
// } else {
//   console.log('You are a teenager')
// }

const result = age >= 18 ? 'You are an adult' : 'You are a teenager'
console.log(result)


const checkBtn = document.getElementById('check-btn')
const numberInput = document.getElementById('number-input')
const checkResult = document.getElementById('check-result')

function checkNumber(number) {
  if (number == 0) {
    checkResult.innerText = 'Ky eshte numri zero'
  } else if ((number % 2) == 1) {
    checkResult.innerText = 'Ky numer eshte tek'
  } else if (number % 2 == 0) {
    checkResult.innerText = 'Ky numer eshte cift'
  }
}

function checkNumberHandler() {
  const value = document.getElementById('number-input').value
  checkNumber(value)
}

function clearParagraph() {
  checkResult.innerText = '...'
}

checkBtn.addEventListener('click', checkNumberHandler)
numberInput.addEventListener('input', clearParagraph)
