

//Variaveis
let ValidaUsuario = false;
let ValidaSenha = false;
let ValidaConfirmSenha = false;
let ValidaTeste1 = false
let ValidaTeste2= false
let ValidaEmail= false
let LoginAdmin = "admin"


//Função para ver a senha quando clicar no ícone de olho
function versenha() {
    let boxsenha = document.querySelector('#inputsenha');
    if (boxsenha.getAttribute('type') == 'password') {
        boxsenha.setAttribute('type', 'text');
    }
    else {
        boxsenha.setAttribute('type', 'password');
    }
}
//Função para ver a senha quando clicar no ícone de olho no modal
function versenhamodal() {
    let boxsenhamodal = document.querySelector('#inputsenhamodal');
    if (boxsenhamodal.getAttribute('type') == 'password') {
        boxsenhamodal.setAttribute('type', 'text');
    }
    else {
        boxsenhamodal.setAttribute('type', 'password')
    }
}
//Função para ver a ConfirmSenha quando clicar no ícone de olho no modal
function verconfirmsenhamodal() {
    let boxconfirmsenhamodal = document.querySelector('#inputconfirmsenhamodal');
    if (boxconfirmsenhamodal.getAttribute('type') == 'password') {
        boxconfirmsenhamodal.setAttribute('type', 'text');
    }
    else {
        boxconfirmsenhamodal.setAttribute('type', 'password')
    }
}

//Função para validar se o valor colocado no input de nome usuario possui o numero de caracteres estipulado
function nomeusuario() {
    let BoxUsuario = document.querySelector("#inputusuario");
    let ValorUsuario = BoxUsuario.value;
    let QteUsuario = ValorUsuario.length;
    let LabelUsuario = document.querySelector("#labelusuario");

    if (QteUsuario <= 2) {
        LabelUsuario.setAttribute('style', 'color:#ff0000a6 !important');
        LabelUsuario.innerHTML = '<strong>Usuário *Insira uma Usuario com no mínimo 3 dígitos</strong>';
        BoxUsuario.setAttribute('style', 'border-color: #ff0000a6');
        ValidaUsuario = false;

    }
    else {
        LabelUsuario.setAttribute('style', 'color:green  !important');
        LabelUsuario.innerHTML = '<strong>Usuário</strong>';
        BoxUsuario.setAttribute('style', 'border-color: green');
        ValidaUsuario = true;
    }
    if (QteUsuario == 0) {
        LabelUsuario.setAttribute('style', 'color:#00000098  !important');
        LabelUsuario.innerHTML = "Usuário";
        BoxUsuario.setAttribute('style', 'border-color: #767676');
        ValidaUsuario = false;
    }
}

function validEmailModal() {
    let BoxEmail = document.querySelector("#inputuEmailModal");
    let ValorEmail = BoxEmail.value;
    let QteValorEmail = ValorEmail.length
    let LabelEmail = document.querySelector("#labelemailmodal");

    if (!ValorEmail.includes("@")) {
        LabelEmail.setAttribute('style', 'color:#ff0000a6 !important');
        LabelEmail.innerHTML = '<strong>Usuário *Insira uma Email válido</strong>';
        BoxEmail.setAttribute('style', 'border-color: #ff0000a6');
        ValidaEmail = false;

    }
    else {
        LabelEmail.setAttribute('style', 'color:green  !important');
        LabelEmail.innerHTML = '<strong>E-mail</strong>';
        BoxEmail.setAttribute('style', 'border-color: green');
        ValidaEmail = true;
    }
    if (ValorEmail =='') {
        LabelEmail.setAttribute('style', 'color:#00000098  !important');
        LabelEmail.innerHTML = "E-mail";
        BoxEmail.setAttribute('style', 'border-color: #767676');
        ValidaEmail = false;
    }
}


//Função para validar se possui o número de caracteres estipulado e estilizar a label da senha do modal.
//As variaveis que possuem 'valida' foram colocadas no inicio como false, para que seja alterada para true somente quando preencher os requisitos estipulados, assim fazendo com que seja possivel efetuar a simulação de login  
function validsenha() {
    let BoxSenha = document.querySelector("#inputsenhamodal");
    let ValorSenha = BoxSenha.value;
    let QteSenha = ValorSenha.length;
    let LabelSenha = document.querySelector("#labelsenhamodal");

    if (QteSenha <= 5) {
        LabelSenha.setAttribute('style', 'color:#ff0000a6 !important');
        LabelSenha.innerHTML = '<strong>Senha *Insira uma senha com no mínimo 6 dígitos</strong>'
        BoxSenha.setAttribute('style', 'border-color: #ff0000a6');
        ValidaSenha = false;
    }
    else {
        LabelSenha.setAttribute('style', 'color:green  !important');
        LabelSenha.innerHTML = '<strong>Senha</strong>'
        BoxSenha.setAttribute('style', 'border-color: green')
        ValidaSenha = true;
    }
    if (QteSenha == 0) {
        LabelSenha.setAttribute('style', 'color:#00000098  !important');
        LabelSenha.innerHTML = "Senha";
        BoxSenha.setAttribute('style', 'border-color: #767676');
        ValidaSenha = false;
    }
}

//Função para validar se o valor colocado no input de confirmação de senha é igual ao colocado na senha.
function ConfirmSenha() {
    let BoxConfirmSenha = document.querySelector("#inputconfirmsenhamodal");
    let ValorConfirmSenha = BoxConfirmSenha.value;
    let QteConfirmSenha = ValorConfirmSenha.length;
    let ValueSenha = document.querySelector("#inputsenhamodal").value;
    let LabelConfirmSenha = document.querySelector("#labelconfirmesenhamodal");

    if (ValorConfirmSenha == ValueSenha) {
        LabelConfirmSenha.setAttribute('style', 'color:green !important');
        LabelConfirmSenha.innerHTML = '<strong>Confirmação de Senha</strong>';
        BoxConfirmSenha.setAttribute('style', 'border-color: green');
        ValidaConfirmSenha = true;
    }
    else {
        LabelConfirmSenha.setAttribute('style', 'color:#ff0000a6 !important');
        LabelConfirmSenha.innerHTML = '<strong>Confirmação de senha *As senhas não são iguais</strong>';
        BoxConfirmSenha.setAttribute('style', 'border-color: #ff0000a6');
        ValidaConfirmSenha = false;
    }
    if (QteConfirmSenha == 0) {
        LabelConfirmSenha.setAttribute('style', 'color:#00000098  !important');
        LabelConfirmSenha.innerHTML = "Confirmação de senha";
        BoxConfirmSenha.setAttribute('style', 'border-color: #767676');
        ValidaConfirmSenha = false;
    }
}



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


//simula o login do usuario. Consulta no codigo se as informações de login batem com a estipulada e loga o usuario, caso contrario mostra uma mensagem de erro.
function logar() {
    
    let BoxEmail = document.querySelector('#email');
    let ValorEmail = BoxEmail.value;
    let BoxSenhaLogin = document.querySelector('#inputsenha');
    let ValorSenhaLogin = BoxSenhaLogin.value;
    let MsgErrorEntrar = document.querySelector('.msg-error-entrar');
    let MsgSucessEntrar = document.querySelector('.msg-sucess-entrar');

    if(ValorEmail && ValorSenhaLogin == LoginAdmin){
        ValidaTeste1=true;
        ValidaTeste2=true;
    }
    else{
        ValidaTeste1=false;
        ValidaTeste2=false;
    }

    if (ValidaTeste1 && ValidaTeste2) {
       

        MsgSucessEntrar.innerHTML = '*Efetuando Login';
        setTimeout(() => {window.location.href = 'homepage.html'}, 1300);
    }
    else {
        MsgErrorEntrar.innerHTML = '*Usuario não encontrado! Confira seu E-mail e sua senha.';
        setTimeout(() => {MsgErrorEntrar.innerHTML = ''}, 3500);
    }
}


