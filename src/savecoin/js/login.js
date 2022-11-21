

//Variaveis


//As variaveis que possuem 'valida' foram colocadas no inicio como false, para que seja alterada para true somente quando preencher os requisitos estipulados, assim fazendo com que seja possivel efetuar a simulação de login  
//Função que simula o cadastro do usuario.Quando todos os campos estiverem validados ele registra e loga o usuario, caso contrario aparece uma msg de erro.
function cadastrar() {

        nomeusuario();
        validEmailModal();
        validsenha();
        ConfirmSenha();
  

    if (ValidaUsuario && ValidaSenha && ValidaConfirmSenha && ValidaEmail) {
        
        let MsgSucess = document.querySelector('.msg-sucess');

        MsgSucess.innerHTML = '*Usuario cadastrado com sucesso';

        setTimeout(() => {window.location.href = 'homepage.html'}, 1300);
    

    }
    else {
        let MsgError = document.querySelector('.msg-error');
        MsgError.innerHTML = '*Preencha todos os campos corretamente';
        setTimeout(()=> {MsgError.innerHTML = ''}, 3000);
    }
}
