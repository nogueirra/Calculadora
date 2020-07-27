    
    
    var actionButton = document.querySelector('input#action')
    var selectButton = document.querySelector('select#operation')
    
    //Listener
    actionButton.addEventListener('click',operationFunc)

    //Operações
    function operationFunc()
    {
        var num1 = Number(document.querySelector('input#input1').value)
        var num2 = Number(document.querySelector('input#input2').value)
        var result;

        const operations = {
            addition()
            {
            result = num1 + num2
            },
            subtraction()
            {
            result = num1 - num2;
            }
        }

        switch(selectButton.value)  //Checar qual opcao esta selecionada
        {
            case 'addition':
                operations.addition()
            break
            
            case 'subtraction':
                operations.subtraction()
            break
        }
         
        

        document.querySelector('div#result').innerHTML = `Result: ${result}`
        console.log(`A operação ${selectButton.value} entre ${num1} e ${num2} teve um resultado de  ${result}`)
    }

    function updatePage()
    {
        var h1 = document.querySelector('h1#tittle')
        h1.innerHTML = selectButton.value[0].toUpperCase() + selectButton.value.slice(1)
    }