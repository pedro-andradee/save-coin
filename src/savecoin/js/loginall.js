//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 


// Página inicial de Login
const URLLogin = href = 'login.html';

// Objeto para o banco de dados de usuários baseado em JSON
var BancoUsuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
const DadosIniciais = {
    UsuariosIniciais: [
        //Meu ID foi usado como base para o JSON, testar se irá manter posteriormente no arquivo ou se terei que incluir aqui no codigo{ "id": 1, "login": "giovanny", "senha": "admin123", "nome": "Administrador do Sistema - Giovanny", "email": "giovanny@admin.com"},
        { "id": generateUUID (), "login": "gian", "senha": "admin123", "nome": "Administrador do Sistema - Gian", "email": "gian@admin.com"},
        { "id": generateUUID (), "login": "dio", "senha": "admin123", "nome": "Administrador do Sistema - Dio", "email": "dio@admin.com"},
        { "id": generateUUID (), "login": "roma", "senha": "admin123", "nome": "Administrador do Sistema - Roma", "email": "roma@admin.com"},
        { "id": generateUUID (), "login": "amanda", "senha": "admin123", "nome": "Administrador do Sistema - Amanda", "email": "amanda@admin.com"},
        { "id": generateUUID (), "login": "pedro", "senha": "admin123", "nome": "Administrador do Sistema - Pedro", "email": "pedro@admin.com"},
    ]
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
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
        localStorage.setItem('BancoUsuarios', JSON.stringify (DadosIniciais
        ));
    }
    else  {  // Se há dados no localStorage
        
        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        BancoUsuarios = JSON.parse(usuariosJSON);    
    }
};


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Continuar analise daqui. ↑ 

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (var i = 0; i < BancoUsuarios.usuarios.length; i++) {
        var usuario = BancoUsuarios.usuarios[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.login = usuario.login;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.nome = usuario.nome;
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = URLLogin;
}

function addUser (nome, login, senha, email) {
    
    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID ();
    let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };
    
    // Inclui o novo usuario no banco de dados baseado em JSON
    BancoUsuarios.usuarios.push (usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('BancoUsuarios', JSON.stringify (BancoUsuarios));
}

function setUserPass () {

}


// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp ();