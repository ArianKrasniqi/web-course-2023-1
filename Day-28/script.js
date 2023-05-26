const students = [
  {
    name: 'Meriton',
    lastname: 'Sadiku',
    grades: [8, 9, 6, 10]
  },
  {
    name: 'Hekuran',
    lastname: 'Qazimi',
    grades: [6, 10, 7, 10]
  },
  {
    name: 'Elena',
    lastname: 'Muhaxheri',
    grades: [6, 10, 7, 10]
  },
  {
    name: 'Dren',
    lastname: 'Berisha',
    grades: [6, 10, 7, 10]
  },
]

console.log(students[0].grades)
console.log(students[1].grades)
console.log(students[2].grades)
console.log(students[3].grades)

// Students in class are: Meriton, Hekuran, Elena, Dren
console.log(`Students in class are: ${students[0].name}, ${students[1].name}, ${students[2].name}, ${students[3].name}`)
// const studentsInText = students[0].name + ', ' + students[1].name + ', ' +  students[2].name + ', ' +  students[3].name
// console.log("Students in class are: " + studentsInText)

let counter = 4;
let studentsText = '';

while (counter < students.length) {
  if (counter === students.length - 1) {
    studentsText = studentsText + students[counter].name + '.'
  } else {
    studentsText = studentsText + students[counter].name + ', '
  }
  counter++
}
console.log(`Students in class are: ${studentsText}`)

let text = ''
text += students[0].name + ', '
text += students[1].name + ', '
text += students[2].name + ', '
text += students[3].name + ', '



let count = 0;

while (count <= 7) {
  // console.log("Count: ", count)
  count = count + 1
}

const fruits = ['Orange', 'Apple', 'Grape', 'Kiwi', 'Pear', 'Bananas', 'Strawberry']
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index])
  index = index + 1
}


// let fruitLength = fruits.length;

// while (fruitLength > 0) {
//   console.log(fruits[fruitLength - 1])
//   fruitLength = fruitLength - 1
// }
