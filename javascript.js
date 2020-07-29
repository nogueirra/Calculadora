const actionButton = document.querySelector('input#action')
const selectButton = document.querySelector('select#operation')
    
//Listener
actionButton.addEventListener('click',operationFunc())
selectButton.addEventListener('selectionchange',updatePage())

//Operações
function operationFunc()
{
    updatePage()
    const num1 = Number(document.querySelector('input#input1').value)
    const num2 = Number(document.querySelector('input#input2').value)
    var result

    switch(selectButton.value)  //Checar a opção selecionada e mudar o valor do resultado
    {
        case 'addition':
            result = num1 + num2;
        break
            
        case 'subtraction':
            result = num1 - num2;
        break
    }

    document.querySelector('div#result').innerHTML = `Result: ${result}` //Colocar o resultado na tela
    console.log(`A operação ${selectButton.value} entre ${num1} e ${num2} teve um resultado de  ${result}`)
}

function updatePage()
{
    var h1 = document.querySelector('h1#tittle')
    h1.innerHTML = selectButton.value[0].toUpperCase() + selectButton.value.slice(1)
}