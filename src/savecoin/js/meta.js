function initDadosMeta() {
    var UsuariodoBanco = BancoUsuarios.usuarios;
    var QTEUsuarios = UsuariodoBanco.length;
    for (var i = 0; i < QTEUsuarios; i++) {
        const usuario = UsuariodoBanco[i];
       
        if(!usuario.registroMetas || !usuario.registroMetas.metas){
            usuario.registroMetas = {}
            usuario.registroMetas.metas = []
        }
    }
    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
}

function carregarRegistrosMetaUsuarioCorrente() {
    var usuarioDoBanco = BancoUsuarios.usuarios;
    var qtdeUsuarios = usuarioDoBanco.length;
    let registroMetasUsuario;
    for (let i = 0; i < qtdeUsuarios; i++) {
        let usuario = usuarioDoBanco[i];

        if (usuarioCorrente.id == usuario.id) {
            registroMetasUsuario = usuario.registroMetas;
        }
    }
    return registroMetasUsuario;
}

function carregarMetas() {
    let addNovaMetaBotao = document.querySelector(".addNovaMetaBotao");
    let areaMetas = addNovaMetaBotao.parentNode
    let divBlocoMetas = document.createElement("div")
    divBlocoMetas.setAttribute("id", "blocoMetas")
    let getMetasUsuario = carregarRegistrosMetaUsuarioCorrente();
    for(let i = 0; i < getMetasUsuario.metas.length;i++) {
        let divBlocoMeta = document.createElement("div")
        divBlocoMeta.setAttribute("id", "blocoMeta")
        if (getMetasUsuario.metas[i].id !== null) {
            divBlocoMeta.innerHTML = `
                <div class="conteudoMetas">
                <img
                    class="cofrePorco"
                    src="../img/piggy-bank.svg"
                    alt="cofrinho porco"
                />
                <div class="containerMeta">
                    <span class="descricaoMeta">${getMetasUsuario.metas[i].descricaoMeta}</span>
                    <div class="barraProgresso">
                        <div class="barraVerde preenchimentoBarra${i.toString()}"></div>
                    </div>
                    <div class="containerDataProgresso">
                        <span class="dataMeta">Data final: ${getMetasUsuario.metas[i].dataMeta}</span>
                        <span class ="valorMeta">Meta: R$ ${getMetasUsuario.metas[i].valorMeta.toFixed(2)}&nbsp;|&nbsp;Faltam: R$ ${(getMetasUsuario.metas[i].valorMeta - getMetasUsuario.metas[i].valorDepositado).toFixed(2)}</span>
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
    let registrosMetaUsuario = carregarRegistrosMetaUsuarioCorrente();
    for(let i = 0; i < registrosMetaUsuario.metas.length; i++) {
        let progresso = document.querySelector(`.preenchimentoBarra${i.toString()}`)
        let porcentagem = Math.round((registrosMetaUsuario.metas[i].valorDepositado * 100) / registrosMetaUsuario.metas[i].valorMeta)
        if(porcentagem > 100) porcentagem = 100
        progresso.setAttribute("style", "width: " + porcentagem.toString() + "%")
    }   
}

function salvarMeta() {
   let descricaoMeta = document.querySelector("#descricaoMeta").value;
    let valorMeta = Number.parseFloat(document.querySelector("#valorMeta").value);
    let dataMeta = document.querySelector("#dataMeta").value;
    var dataFormatada = dataMeta.split('-').reverse().join('/');
    let registrosMetaUsuario = carregarRegistrosMetaUsuarioCorrente();
    let meta = {"id": registrosMetaUsuario.metas.length + 1, "descricaoMeta": descricaoMeta, "valorMeta": valorMeta,
    "valorDepositado": 0, "dataMeta": dataFormatada}
    registrosMetaUsuario.metas.push(meta)

    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
}


initDadosMeta();
carregarMetas();
carregarBarraProgresso();