
// variavel chamando o icone de olho <pela classe> para mostrar a senha. 
let eye= document.querySelector('.bi-eye-fill')


//add um evento quando clicar. (arrow function = "faça o que eu colocar nas chaves").

.addEventListener('click', ()=>{
    // pegar o input de senha e colocar dentro da variavel em questão.
    let inputSenha = document.querySelector('#campo-senha')

    //se o atributo:type do 'inputSenha' for password "faça o que eu colocar nas chaves".
    if (inputSenha.getAttribute('type') == 'password'){

        //insira no atributo type o tipo text.
        inputSenha.setAttribute('type', 'text')
    }

    else{
        input.setAttribute('type', 'password')
    }
})

//parar aqui