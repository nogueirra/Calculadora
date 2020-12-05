//Listener
document.querySelector('#action').addEventListener('click', operationFunc)
document.querySelector('#operation').onclick = updatePage
// document.querySelector('#action').onclick = operationFunc
// selectButton.addEventListener('selectionchange', updatePage())

//Operações

function updatePage() {
  var operator = document.querySelector('#operation').value
  document.querySelector('#title').innerHTML = operator
  console.log('rodado')
}

function operationFunc() {
  const operator = document.querySelector('#operation').value
  const [num1, num2] = document.querySelectorAll('#numbers input')
  let result

  const operations = {
    Addition() {
      return num1 + num2
    },
    Subtraction() {
      return num1 - num2
    }
  }
  const operation = operations[operator]
  operation()
  document.querySelector('div#result').innerHTML = `Result: ${result}`
}
