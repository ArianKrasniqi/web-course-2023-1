// function consoleSmth(name) {
//   console.log(`Clicked by: ${name}`)
// }

// const submitBtn = document.getElementById('submit-btn')


// submitBtn.addEventListener('click', function () { consoleSmth('Meriton') }) // Anonymous Function

const submitBtn = document.getElementById('submit-btn')

function consoleInputValue() {
  const inputValue = document.getElementById('user-input').value
  const inputResultSpan = document.getElementById('input-result')
  inputResultSpan.innerText = inputValue
}

submitBtn.addEventListener('click', consoleInputValue)