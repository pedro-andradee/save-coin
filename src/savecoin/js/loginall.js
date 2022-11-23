// Objeto para o banco de dados de usuários baseado em JSON
var BancoUsuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

var ValidaUsuario = false;
var ValidaSenha = false;
var ValidaConfirmSenha = false;
var ValidaEmail = false


// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
var DadosIniciais = {
    usuarios: [
        { "id": 1, "login": "giovanny", "senha": "admin123", "nome": "Administrador do Sistema - Giovanny", "email": "giovanny@admin.com" },
        { "id": generateUUID(), "login": "gian", "senha": "admin123", "nome": "Administrador do Sistema - Gian", "email": "gian@admin.com" },
        { "id": generateUUID(), "login": "dio", "senha": "admin123", "nome": "Administrador do Sistema - Dio", "email": "dio@admin.com" },
        { "id": generateUUID(), "login": "roma", "senha": "admin123", "nome": "Administrador do Sistema - Roma", "email": "roma@admin.com" },
        { "id": generateUUID(), "login": "amanda", "senha": "admin123", "nome": "Administrador do Sistema - Amanda", "email": "amanda@admin.com" },
        { "id": generateUUID(), "login": "pedro", "senha": "admin123", "nome": "Administrador do Sistema - Pedro", "email": "pedro@admin.com" },
    ]
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        console.log("usuario Corrente Carregado")
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('BancoUsuarios');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        console.log('Dados de usuários não encontrados no localStorage. Feita a carga inicial dos Admin.');

        // Copia os dados iniciais para o banco de dados 
        BancoUsuarios = DadosIniciais
            ;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('BancoUsuarios', JSON.stringify(DadosIniciais
        ));
    }
    else {  // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        BancoUsuarios = JSON.parse(usuariosJSON);
    }
};



// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(email, senha) {

    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    var UsuariodoBanco = BancoUsuarios.usuarios;
    var QTEUsuarios = UsuariodoBanco.length;

    for (var i = 0; i < QTEUsuarios; i++) {
        var usuario = UsuariodoBanco[i];

        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (email == usuario.email && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.senha = usuario.senha;
      

            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    setTimeout(() => { window.location.href = 'login.html' }, 1000);
}

function addUser(nome, login, senha, email) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };

    // Inclui o novo usuario no banco de dados baseado em JSON
    BancoUsuarios.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
}

function setUserPass() {

}

// Declara uma função para processar o formulário de login
function processaFormLogin() {

    // Obtem os dados de login e senha a partir do formulário de login
    var username = document.getElementById('email').value;
    var password = document.getElementById('inputsenha').value;
    let MsgErrorEntrar = document.querySelector('.msg-error-entrar');
    let MsgSucessEntrar = document.querySelector('.msg-sucess-entrar');

    // Valida login e se estiver ok, redireciona para tela inicial da aplicação
    resultadoLogin = loginUser(username, password);
    if (resultadoLogin) {
        MsgSucessEntrar.innerHTML = '*Efetuando Login';
        setTimeout(() => { window.location.href = 'homepage.html' }, 1300);
    }
    else { // Se login falhou, avisa ao usuário
        MsgErrorEntrar.innerHTML = '*Usuario não encontrado! Confira seu E-mail e sua senha.';
        setTimeout(() => { MsgErrorEntrar.innerHTML = '' }, 3500);

    }
}



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
        LabelEmail.innerHTML = '<strong>E-mail *Insira uma Email válido</strong>';
        BoxEmail.setAttribute('style', 'border-color: #ff0000a6');
        ValidaEmail = false;

    }
    else {
        LabelEmail.setAttribute('style', 'color:green  !important');
        LabelEmail.innerHTML = '<strong>E-mail</strong>';
        BoxEmail.setAttribute('style', 'border-color: green');
        ValidaEmail = true;
    }
    if (ValorEmail == '') {
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



function salvaLogin() {
    nomeusuario();
    validEmailModal();
    validsenha();
    ConfirmSenha();
    // Obtem os dados do formulário
    let login = document.getElementById('inputusuario').value;
    let nome = document.getElementById('txt_nome').value;
    let email = document.getElementById('inputuEmailModal').value;
    let senha = document.getElementById('inputsenhamodal').value;
    let senha2 = document.getElementById('inputconfirmsenhamodal').value;


    if (ValidaUsuario && ValidaSenha && ValidaConfirmSenha && ValidaEmail) {

        let MsgSucess = document.querySelector('.msg-sucess');

        MsgSucess.innerHTML = '*Usuario cadastrado com sucesso';

        setTimeout(() => { window.location.href = 'homepage.html' }, 1300);
        addUser(nome, login, senha, email);
    }
    else {
        let MsgError = document.querySelector('.msg-error');
        MsgError.innerHTML = '*Preencha todos os campos corretamente';
        setTimeout(() => { MsgError.innerHTML = '' }, 3000);

    }
    // Adiciona o usuário no banco de dados

}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();

