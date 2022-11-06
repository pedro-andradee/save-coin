
let ValidaUsuario = false;
let ValidaSenha = false;
let ValidaConfirmSenha = false;
let ValidaTeste1 = false
let ValidaTeste2= false



function versenha() {
    let boxsenha = document.querySelector('#inputsenha');
    if (boxsenha.getAttribute('type') == 'password') {
        boxsenha.setAttribute('type', 'text');
    }
    else {
        boxsenha.setAttribute('type', 'password');
    }
}

function versenhamodal() {
    let boxsenhamodal = document.querySelector('#inputsenhamodal');
    if (boxsenhamodal.getAttribute('type') == 'password') {
        boxsenhamodal.setAttribute('type', 'text');
    }
    else {
        boxsenhamodal.setAttribute('type', 'password')
    }
}

function verconfirmsenhamodal() {
    let boxconfirmsenhamodal = document.querySelector('#inputconfirmsenhamodal');
    if (boxconfirmsenhamodal.getAttribute('type') == 'password') {
        boxconfirmsenhamodal.setAttribute('type', 'text');
    }
    else {
        boxconfirmsenhamodal.setAttribute('type', 'password')
    }
}


function validsenha() {
    let BoxSenha = document.querySelector("#inputsenhamodal");
    let ValorSenha = BoxSenha.value;
    let QteSenha = ValorSenha.length;
    let LabelSenha = document.querySelector("#labelsenhamodal");

    if (QteSenha <= 5) {
        LabelSenha.setAttribute('style', 'color:red !important');
        LabelSenha.innerHTML = '<strong>Senha *Insira uma senha com no mínimo 6 dígitos</strong>'
        BoxSenha.setAttribute('style', 'border-color: red');
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
        LabelConfirmSenha.setAttribute('style', 'color:red !important');
        LabelConfirmSenha.innerHTML = '<strong>Confirmação de senha *As senhas não conferem</strong>';
        BoxConfirmSenha.setAttribute('style', 'border-color: red');
        ValidaConfirmSenha = false;
    }
    if (QteConfirmSenha == 0) {
        LabelConfirmSenha.setAttribute('style', 'color:#00000098  !important');
        LabelConfirmSenha.innerHTML = "Confirmação de senha";
        BoxConfirmSenha.setAttribute('style', 'border-color: #767676');
        ValidaConfirmSenha = false;
    }
}

function nomeusuario() {
    let BoxUsuario = document.querySelector("#inputusuario");
    let ValorUsuario = BoxUsuario.value;
    let QteUsuario = ValorUsuario.length;
    let LabelUsuario = document.querySelector("#labelusuario");

    if (QteUsuario <= 2) {
        LabelUsuario.setAttribute('style', 'color:red !important');
        LabelUsuario.innerHTML = '<strong>Usuário *Insira uma Usuario com no mínimo 3 dígitos</strong>';
        BoxUsuario.setAttribute('style', 'border-color: red');
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


function cadastrar() {
    if (ValidaUsuario && ValidaSenha && ValidaConfirmSenha) {
        let MsgSucess = document.querySelector('.msg-sucess');

        MsgSucess.innerHTML = '*Usuario cadastrado com sucesso';

        setTimeout(() => {window.location.href = 'homepage.html'}, 1300);
    

    }
    else {
        let MsgError = document.querySelector('.msg-error');
        MsgError.innerHTML = '*Preencha todos os campos corretamente';
    }
}


function logar() {
    
    let BoxEmail = document.querySelector('#email');
    let ValorEmail = BoxEmail.value;
    let BoxSenhaLogin = document.querySelector('#inputsenha');
    let ValorSenhaLogin = BoxSenhaLogin.value;
    let MsgErrorEntrar = document.querySelector('.msg-error-entrar');
    let MsgSucessEntrar = document.querySelector('.msg-sucess-entrar');
    if(ValorEmail && ValorSenhaLogin == "admin"){
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
        setTimeout(() => {MsgErrorEntrar.innerHTML = ''}, 1800);
    }
}

