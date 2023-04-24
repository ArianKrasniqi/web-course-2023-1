const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vitae."

const textSlice = text.slice(0, 11)
console.log("textSlice: ", textSlice)
const singleChar = textSlice[4]
console.log("singleChar: ", singleChar)
const course = 'Web Development Course'
const newCourse = course.replace('Web', 'Java')
console.log('newCourse: ', newCourse)

const SPAN1 = document.getElementById('num1')
const SPAN2 = document.getElementById('num2')
const RESULTSPAN = document.getElementById('result')

function sum(num1, num2) {
  console.log('Inside sum function')
  const value = num1 + num2;
  SPAN1.innerText = num1
  SPAN2.innerText = num2
  RESULTSPAN.innerText = value

  return value
}

const sumResult = sum(80, 12)
console.log('sumResult: ', sumResult)

function showTheSentence(sentence) { }

showTheSentence('aaa ba bla blab')

function show16Chars(sentence) {
  const newSentence = sentence.toUpperCase()
  const chars16 = newSentence.slice(0, 17)
  return chars16
}

const value = show16Chars("Nuk ka asnjë autonomi. Çka do që do të dilte jashtë Kushtetutës së Kosovës do të duhej të ratifikohej në Kuvendin e Kosovës, pra në fund do të ju takoj atyre deputetëve të vendosin për diçka të tillë.")
console.log('value', value)

function char12(sentence) {
  const char = sentence[11].toUpperCase()
  return char
}

const char12Value = char12("Nuk ka asnjë autonomi. Çka do që do të dilte jashtë Kushtetutës së Kosovës do të duhej të ratifikohej në Kuvendin e Kosovës, pra në fund do të ju takoj atyre deputetëve të vendosin për diçka të tillë")
console.log('char12Value', char12Value)
