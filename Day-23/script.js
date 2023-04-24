// function withTax(productPrice) {
//   const value = productPrice * 1.17
//   return value
// }

// const milkPrice = 2
// const milkPriceWithTax = withTax(milkPrice)

// console.log(`Base milk price is: ${milkPrice} Euro`)
// console.log(`Milk price with Tax: ${milkPriceWithTax} Euro`)

// const chocolatePrice = 3
// const chocolatePriceWithTax = withTax(chocolatePrice)

// console.log(`Base Choco price is: ${chocolatePrice} Euro`)
// console.log(`Choco price with Tax: ${chocolatePriceWithTax} Euro`)

// let city = 'Peje' // Global Variable

// function someFunction() {
//   const centerName = 'cedX' // Local Variable
//   // console.log("INNER: ", centerName)
//   let city = 'Prishtine'

//   console.log('City INSIDE:', city)
// }


// someFunction()
// console.log('City OUTER:', city)
// console.log('OUTER: ', centerName) //Throws an error


// LOCAL Variable -> Variable declared inside the function
// GLOBAL Variable -> Variable declared outside the function

const submitBtn = document.getElementById('submit-btn')
const submitBtn2 = document.getElementById('submit-btn2')

function consoleOnClick(buttonNumber) {
  console.log(`Submit button ${buttonNumber} is clicked`);
}

submitBtn.addEventListener('click', function() { consoleOnClick(1) })
submitBtn2.addEventListener('click', function() { consoleOnClick(2) })
