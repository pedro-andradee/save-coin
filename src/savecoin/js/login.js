
let ValidaUsuario = false;
let ValidaSenha = false;
let ValidaConfirmSenha = false;




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


function cadastrar(){
    if( ValidaUsuario && ValidaSenha && ValidaConfirmSenha){
             alert("DEUUU VERDADEIRO");
    }
    else{
            alert("DEUU FALSO");
    }
}