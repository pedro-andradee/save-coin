// Objeto para o banco de dados de usuários baseado em JSON
var BancoUsuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

var ValidaUsuario = false;
var ValidaSenha = false;
var ValidaConfirmSenha = false;
var ValidaEmail = false;
var Validaidade = false;


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
        { "id": 1, "idade": 99, "senha": "admin", "nome": "Administrador do Sistema - Giovanny", "email": "giovanny@admin.com"},
        { "id": generateUUID(), "idade": "99", "senha": "admin", "nome": "Administrador do Sistema - Gian", "email": "gian@admin.com" },
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
        if ((email.toLowerCase()) == usuario.email && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.idade = usuario.idade;
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
        setTimeout(() => { window.location.href = 'index.html' }, 1300);
    }
    else { // Se login falhou, avisa ao usuário
        MsgErrorEntrar.innerHTML = '*Usuario não encontrado! Confira seu E-mail e sua senha.';
        setTimeout(() => { MsgErrorEntrar.innerHTML = '' }, 3500);

    }
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    setTimeout(() => { window.location.href = 'login.html' }, 1000);
}



function addUser(nome, idade, senha, email) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = { "id": newId, "idade": idade, "senha": senha, "nome": nome, "email": email };

    // Inclui o novo usuario no banco de dados baseado em JSON
    BancoUsuarios.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
}


function nomeusuario() {
    let BoxUsuario = document.querySelector("#inputusuario");
    let ValorUsuario = BoxUsuario.value;
    let QteUsuario = ValorUsuario.length;
    let LabelUsuario = document.querySelector("#labelusuario");

    if (QteUsuario <= 8) {
        LabelUsuario.setAttribute('style', 'color:#FF6E31 !important');
        LabelUsuario.innerHTML = 'Nome: *Coloque seu nome completo!';
        BoxUsuario.setAttribute('style', 'border-color: color:#FF6E31');
        ValidaUsuario = false;

    }
    else {
        LabelUsuario.setAttribute('style', 'color:rgb(33, 211, 33)  !important');
        LabelUsuario.innerHTML = 'Nome:';
        BoxUsuario.setAttribute('style', 'border-color: rgb(33, 211, 33)');
        ValidaUsuario = true;
    }
    if (QteUsuario == 0) {
        LabelUsuario.setAttribute('style', 'color:#FF6E31  !important');
        LabelUsuario.innerHTML = "Nome:";
        BoxUsuario.setAttribute('style', 'border-color: #FF6E31');
        ValidaUsuario = false;
    }
}

function validEmailModal() {
    let BoxEmail = document.querySelector("#inputuEmailModal");
    let ValorEmail = BoxEmail.value;
    let QteValorEmail = ValorEmail.length
    let LabelEmail = document.querySelector("#labelemailmodal");

    if (!ValorEmail.includes("@")) {
        LabelEmail.setAttribute('style', 'color:#FF6E31 !important');
        LabelEmail.innerHTML = 'E-mail: *Insira uma Email válido';
        BoxEmail.setAttribute('style', 'border-color: #FF6E31');
        ValidaEmail = false;

    }
    else {
        LabelEmail.setAttribute('style', 'color:rgb(33, 211, 33)  !important');
        LabelEmail.innerHTML = 'E-mail:';
        BoxEmail.setAttribute('style', 'border-color: rgb(33, 211, 33)');
        ValidaEmail = true;
    }
    if (ValorEmail == '') {
        LabelEmail.setAttribute('style', 'color:#FF6E31  !important');
        LabelEmail.innerHTML = "E-mail:";
        BoxEmail.setAttribute('style', 'border-color: #FF6E31');
        ValidaEmail = false;
    }
}

function validsenha() {
    let BoxSenha = document.querySelector("#inputsenhamodal");
    let ValorSenha = BoxSenha.value;
    let QteSenha = ValorSenha.length;
    let LabelSenha = document.querySelector("#labelsenhamodal");

    if (QteSenha <= 5) {
        LabelSenha.setAttribute('style', 'color:#FF6E31 !important');
        LabelSenha.innerHTML = 'Senha: *Insira uma senha com no mínimo 6 dígitos'
        BoxSenha.setAttribute('style', 'border-color: #FF6E31');
        ValidaSenha = false;
    }
    else {
        LabelSenha.setAttribute('style', 'color:rgb(33, 211, 33)  !important');
        LabelSenha.innerHTML = 'Senha:'
        BoxSenha.setAttribute('style', 'border-color: rgb(33, 211, 33)')
        ValidaSenha = true;
    }
    if (QteSenha == 0) {
        LabelSenha.setAttribute('style', 'color:#FF6E31  !important');
        LabelSenha.innerHTML = "Senha:";
        BoxSenha.setAttribute('style', 'border-color: #FF6E31');
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
        LabelConfirmSenha.setAttribute('style', 'color:rgb(33, 211, 33) !important');
        LabelConfirmSenha.innerHTML = 'Confirme sua senha:';
        BoxConfirmSenha.setAttribute('style', 'border-color: rgb(33, 211, 33)');
        ValidaConfirmSenha = true;
    }
    else {
        LabelConfirmSenha.setAttribute('style', 'color:#FF6E31 !important');
        LabelConfirmSenha.innerHTML = 'Confirme sua senha: *As senhas não são iguais.';
        BoxConfirmSenha.setAttribute('style', 'border-color: #FF6E31');
        ValidaConfirmSenha = false;
    }
    if (QteConfirmSenha == 0) {
        LabelConfirmSenha.setAttribute('style', 'color:#FF6E31  !important');
        LabelConfirmSenha.innerHTML = "Confirme sua senha:";
        BoxConfirmSenha.setAttribute('style', 'border-color: #FF6E31');
        ValidaConfirmSenha = false;
    }
}

function validaidade() {
    let Boxidade = document.querySelector("#inputidade");
    let Valoridade = Boxidade.value;
    let Qteidade = Valoridade.length;
    let Labelidade = document.querySelector("#labelidade");

    if (Valoridade <= 4  ||Valoridade >=99  ) {
        Labelidade.setAttribute('style', 'color:#FF6E31 !important');
        Labelidade.innerHTML = 'Idade: *Insira uma idade válida'
        Boxidade.setAttribute('style', 'border-color: #FF6E31');
        Validaidade = false;
    }
    else {
        Labelidade.setAttribute('style', 'color:rgb(33, 211, 33)  !important');
        Labelidade.innerHTML = 'Idade:'
        Boxidade.setAttribute('style', 'border-color: rgb(33, 211, 33)')
        Validaidade = true;
    }
    if (Valoridade == 0) {
        Labelidade.setAttribute('style', 'color:#FF6E31  !important');
        Labelidade.innerHTML = "Idade:";
        Boxidade.setAttribute('style', 'border-color: #FF6E31');
        Validaidade = false;
    }
}


function salvaLogin() {
    nomeusuario();
    validEmailModal();
    validsenha();
    ConfirmSenha();
    validaidade();
    // Obtem os dados do formulário
    let nome = document.getElementById('inputusuario').value;
    let email = (document.getElementById('inputuEmailModal').value).toLowerCase();
    let senha = document.getElementById('inputsenhamodal').value;
    let senha2 = document.getElementById('inputconfirmsenhamodal').value;
    let idade = document.getElementById('inputidade').value;


    if (ValidaUsuario && ValidaSenha && ValidaConfirmSenha && ValidaEmail && Validaidade) {

        let MsgSucess = document.querySelector('.msg-sucess');

        MsgSucess.innerHTML = '*Usuario cadastrado com sucesso';

        setTimeout(() => { window.location.href = 'index.html' }, 1300);
        addUser(nome, idade, senha, email);
        
        loginUser(email,senha)
    }
    else {
        let MsgError = document.querySelector('.msg-error');
        alert("Burro")
        MsgError.innerHTML = '*Preencha todos os campos corretamente';
        setTimeout(() => { MsgError.innerHTML = '' }, 3000);

    }
    // Adiciona o usuário no banco de dados

}


function enviaremail(){
    let emailenviado = document.querySelector('#emailenviado');

    emailenviado.innerHTML = 'E-mail para recuperação de senha enviado com sucesso!';
}

initLoginApp()