const classes = [['Meritoni', 'Enkela'], ['Hekurani', 'Elena'], ['Erolina', 'Rosela'], ['Dreni', 'Genci', 'Ariani']];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i])
// }

for (let i = 0; i < classes.length; i++) {
  // console.log(classes[i].length);

  for (let j = 0; j < classes[i].length; j++) {
    // console.log(classes[i][j]);
  }
}

let stars = ''
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    stars = stars + '*'
  }
  console.log(stars)
  stars = '';
}

function faktorieli(number) {
  let result = 1
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  console.log(`Fatorieli i ${number} eshte: ${result}`)
}

faktorieli(7)

let students = ['Meriton', 'Enkela', 'Arian'];

let text = students.join(', ')
// console.log(text)

let studentsSentence = 'Meriton, Enkela, Hekuran, Elena';
const studentsArray = studentsSentence.split(', ')
// console.log(studentsArray)


const mySkills = ["CSS", "HTML"];
const learningSkills = ["Javascript", "Git", "Node"];

// const futureSkills = mySkills.concat(learningSkills)
const futureSkills = [...mySkills, ...learningSkills]

// console.log(mySkills)
// console.log(learningSkills)
console.log(futureSkills)
const newSkills = futureSkills.slice(1)
console.log(newSkills)

// Splice Exercises
// const fruits = ["Peach", "Lemo", "Apple", "Strawberry"];
// console.log(fruits)
// fruits.splice(3, 0, "Orange", "Banana");
// console.log(fruits)
// fruits.splice(2, 1)
// console.log(fruits)
// fruits.splice(1, 3, 'Apple')
// console.log(fruits)
// fruits.splice(1)
// console.log(fruits)

// students.forEach(function(element, index) {
//   console.log(element)
//   console.log(index)
// })

classes.forEach(function(singleClass) {
  console.log(singleClass)
  singleClass.forEach(function(student) {
    console.log(student)
  })
})

const findHekuran = students.find(function(student) {
  return student === 'Hekuran'
})

console.log(findHekuran)

if (findHekuran) {
  console.log('We found Hekuran')
} else {
  console.log("We couldn't find Hekuran")
}

const persons = [
  {
    name: 'Dren',
    role: 'Student',
    city: 'Peje',
    course: 'Web'
  },
  {
    name: 'Genc',
    role: 'Student',
    city: 'Prishtine',
    course: 'Java'
  },
  {
    name: 'Rosela',
    role: 'Student',
    city: 'Peje',
    course: 'Javascript'
  },
  {
    name: 'Erolina',
    role: 'Student',
    city: 'Peje',
    course: 'Java'
  },
  {
    name: 'Arian',
    role: 'Teacher',
    city: 'Peje'
  }
]

const findJavaStudentInPejeIndex = persons.findIndex(function(person) {
  return person.city == 'Peje' && person.course == 'Java'
})

console.log(findJavaStudentInPejeIndex)
console.log(persons[findJavaStudentInPejeIndex])

// const findTeacher = persons.find(function(person) {
//   return person.role == 'Teacher'
// })

// console.log(findTeacher)
