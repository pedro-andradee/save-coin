getLocalStorage =  () => JSON.parse(localStorage.getItem('BancoUsuarios')) ?? []

// Objeto para o banco de dados de usuários baseado em JSON
var bancoMetas = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};


// Dados para serem utilizados como carga inicial
var dadosIniciaisMeta = {
    metas: [
        { "id": 1, "descricaoMeta": "Livro de ciências", "valorMeta": 100, "valorDepositado": 50, "dataMeta": "02/03/2022"},
        { "id": 2, "descricaoMeta": "Presente de natal", "valorMeta": 1000, "valorDepositado":750, "dataMeta": "25/12/2022"}
    ]
};

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initDadosMeta() {
    // PARTE 2 - INICIALIZA BANCO DE DADOS DE METAS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var metasJSON = localStorage.getItem('bancoMetas');

    // Verifica se existem dados já armazenados no localStorage
    if (!metasJSON) {  // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        console.log('Dados de metas não encontrados no localStorage. Feita a carga inicial dos Admin.');

        // Copia os dados iniciais para o banco de dados 
        bancoMetas = dadosIniciaisMeta

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('bancoMetas', JSON.stringify(dadosIniciaisMeta));
    } else {  // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        bancoMetas = JSON.parse(metasJSON);
    }
}
//DadosIniciais.usuarios[0].metas[0].length
function carregarMetas() {
    let addNovaMetaBotao = document.querySelector(".addNovaMetaBotao");
    let areaMetas = addNovaMetaBotao.parentNode
    let divBlocoMetas = document.createElement("div")
    divBlocoMetas.setAttribute("id", "blocoMetas")
    for(let i = 0; i < bancoMetas.metas.length;i++) {
        let divBlocoMeta = document.createElement("div")
        divBlocoMeta.setAttribute("id", "blocoMeta")
        if (bancoMetas.metas[i].id !== null) {
            divBlocoMeta.innerHTML = `
                <div class="conteudoMetas">
                <img
                    class="cofrePorco"
                    src="../img/piggy-bank.svg"
                    alt="cofrinho porco"
                />
                <div class="containerMeta">
                    <span class="descricaoMeta">${bancoMetas.metas[i].descricaoMeta}</span>
                    <div class="barraProgresso">
                        <div class="barraVerde preenchimentoBarra${i.toString()}"></div>
                    </div>
                    <div class="containerDataProgresso">
                        <span class="dataMeta">Data final: ${bancoMetas.metas[i].dataMeta}</span>
                        <span class ="valorMeta">Meta: R$ ${bancoMetas.metas[i].valorMeta.toFixed(2)}&nbsp;|&nbsp;Faltam: R$ ${(bancoMetas.metas[i].valorMeta - bancoMetas.metas[i].valorDepositado).toFixed(2)}</span>
                    </div>
                </div>
                <div class="containerDelete">
                    <button
                    type="button"
                    data-toggle="modal"
                    data-target="#modal-delete-meta"
                    class="bi bi-x-circle botaoDelete"
                    ></button>
                </div>
                </div>
                <button
                type="button"
                data-toggle="modal"
                data-target="#modal-atualizar-valor"
                class="botaoAtualizarValor"
                >
                Nova entrada
                </button>
                <button
                type="button"
                data-toggle="modal"
                data-target="#modal-criar-editar-meta"
                class="botaoEditar"
                >
                Editar
                </button>`            
        }
        divBlocoMetas.append(divBlocoMeta)
    }
    areaMetas.insertBefore(divBlocoMetas, addNovaMetaBotao)
}

function carregarBarraProgresso() {
    for(let i = 0; i < bancoMetas.metas.length; i++) {
        let progresso = document.querySelector(`.preenchimentoBarra${i.toString()}`)
        let porcentagem = Math.round((bancoMetas.metas[i].valorDepositado * 100) / bancoMetas.metas[i].valorMeta)
        if(porcentagem > 100) porcentagem = 100
        progresso.setAttribute("style", "width: " + porcentagem.toString() + "%")
    }   
}

function salvarMeta() {
   let descricaoMeta = document.querySelector("#descricaoMeta").value;
    let valorMeta = Number.parseFloat(document.querySelector("#valorMeta").value);
    let dataMeta = document.querySelector("#dataMeta").value;
    var dataFormatada = dataMeta.split('-').reverse().join('/');
    let meta = {"id": bancoMetas.metas.length + 1, "descricaoMeta": descricaoMeta, "valorMeta": valorMeta,
    "valorDepositado": 0, "dataMeta": dataFormatada}


    bancoMetas.metas.push(meta)

    localStorage.setItem('bancoMetas', JSON.stringify(bancoMetas));



   /* getLocalStorage()
    var UsuariodoBanco = BancoUsuarios.usuarios;
    var QTEUsuarios = UsuariodoBanco.length;
    for (var i = 0; i < QTEUsuarios; i++) {
        const usuario = UsuariodoBanco[i];
       
      

        if(usuario.id == usuarioCorrente.id){

            let descricaoMeta = document.querySelector("#descricaoMeta").value;
            let valorMeta = Number.parseFloat(document.querySelector("#valorMeta").value);
            let dataMeta = document.querySelector("#dataMeta").value;
            var dataFormatada = dataMeta.split('-').reverse().join('/');
            let meta = {"id": bancoMetas.metas.length + 1, "descricaoMeta": descricaoMeta, "valorMeta": valorMeta,
            "valorDepositado": 0, "dataMeta": dataFormatada}

            usuario.meta = meta;

            }
 
       localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
    }*/

}

initDadosMeta();
carregarMetas();
carregarBarraProgresso();