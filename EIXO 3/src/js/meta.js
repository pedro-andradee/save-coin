function initDadosMeta() {
    let usuario = {
        id: "79f380f3-9d78-4625-a2ac-8e16f956a244",
        login: "pedro",
        email: "pedro@admin.com",
        nome: "Administrador do Sistema - Pedro",
        senha: "admin123"
    }
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuario))
    let BancoUsuarios = JSON.parse(localStorage.getItem('BancoUsuarios'));
    var UsuariodoBanco = BancoUsuarios.usuarios;
    //var UsuariodoBanco = BancoUsuarios.usuarios;
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

// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    const d = new Date().getTime();//Timestamp
    const d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
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

function carregarRegistrosMetaUsuarioCorrente() {
    /* var usuarioDoBanco = BancoUsuarios.usuarios;
    var qtdeUsuarios = usuarioDoBanco.length;
    let registroMetasUsuario;
    for (let i = 0; i < qtdeUsuarios; i++) {
        let usuario = usuarioDoBanco[i];

        if (usuarioCorrente.id == usuario.id) {
            registroMetasUsuario = usuario.registroMetas;
        }
    } */

    let usuarioMetas = {
        metas: [
            {
                id: "e03c0936-e4cc-4fe9-ac9e-31380c92c6f5",
                descricaoMeta: "teste",
                valorMeta: 100,
                valorDepositado: 0,
                dataMeta: "24/11/2023"
            }
        ]
        
    }
    //return registroMetasUsuario;
    return usuarioMetas;
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
                        src="../src/img/piggy-bank.svg"
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
                    <div class="containerDelete" id="${getMetasUsuario.metas[i].id}">
                        <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-delete-meta"
                        class="bi bi-trash botaoDelete"
                        onclick="setIdMetaDelete(event)"
                        ></button>
                    </div>
                </div>
                <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-atualizar-valor"
                class="botaoAtualizarValor"
                id="${getMetasUsuario.metas[i].id}"
                onclick="setIdMetaEntrada(event)"
                >
                Nova entrada
                <i class="bi bi-cash-stack"></i>
                </button>
                <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-criar-editar-meta"
                class="botaoEditar"
                id="${getMetasUsuario.metas[i].id}"
                onclick="setIdMetaEditar(event)"
                >
                Editar
                <i class="bi bi-pencil"></i>
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

function setIdMetaEditar(event) {
    let modalFooter = document.querySelector("#modal-criar-editar-meta .modal-footer");
    let idMetaEditar = event.target.id;
    modalFooter.setAttribute("id", `${idMetaEditar}`);
}

function salvarMeta(event) {
    let idMeta = event.target.parentNode.id;
    let descricaoMeta = document.querySelector("#descricaoMeta").value;
    let valorMeta = Number.parseFloat(document.querySelector("#valorMeta").value);
    let dataMeta = document.querySelector("#dataMeta").value;
    var dataFormatada = dataMeta.split('-').reverse().join('/');
    console.log(idMeta)
    console.log(descricaoMeta)
    console.log(valorMeta)
    console.log(dataMeta)
    let registrosMetaUsuario = carregarRegistrosMetaUsuarioCorrente();
    if(!!idMeta) {
        for(let i = 0; i < registrosMetaUsuario.metas.length;i++) {
            if(registrosMetaUsuario.metas[i].id == idMeta) {
                registrosMetaUsuario.metas[i].descricaoMeta = descricaoMeta;
                registrosMetaUsuario.metas[i].valorMeta = valorMeta;
                registrosMetaUsuario.metas[i].dataMeta = dataFormatada;
                break;
            }
        }
    } else {
        let metaUUID = generateUUID();
        let meta = {"id": metaUUID, "descricaoMeta": descricaoMeta, "valorMeta": valorMeta,
        "valorDepositado": 0, "dataMeta": dataFormatada}
        registrosMetaUsuario.metas.push(meta)
    }

    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
    window.location.href = 'metaFinanceira.html'
}

function setIdMetaEntrada(event) {
    let modalFooter = document.querySelector("#modal-atualizar-valor .modal-footer");
    let idMetaAtualizar = event.target.id;
    modalFooter.setAttribute("id", `${idMetaAtualizar}`);
}

function inserirNovaEntrada(event) {
    let valorEntrada = Number.parseFloat(document.querySelector("#valor-entrada").value);
    let idMetaAtualizarValor = event.target.parentNode.id;
    let getMetasUsuarioCorrente = carregarRegistrosMetaUsuarioCorrente();
    for(let i = 0; i < getMetasUsuarioCorrente.metas.length;i++) {
        if(getMetasUsuarioCorrente.metas[i].id == idMetaAtualizarValor) {
            getMetasUsuarioCorrente.metas[i].valorDepositado += valorEntrada;
            break;
        }
    }
    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
    window.location.href = 'metaFinanceira.html'
}

function setIdMetaDelete(event) {
    let modalFooter = document.querySelector("#modal-delete-meta .modal-footer");
    let containerDelete = event.target.parentNode.id;
    modalFooter.setAttribute("id", `${containerDelete}`);
}

function deletarMeta(event) {
    let idMetaRemover = event.target.parentNode.id;
    let getMetasUsuarioCorrente = carregarRegistrosMetaUsuarioCorrente();
    for(let i = 0; i < getMetasUsuarioCorrente.metas.length;i++) {
        if(getMetasUsuarioCorrente.metas[i].id == idMetaRemover) {
            getMetasUsuarioCorrente.metas.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('BancoUsuarios', JSON.stringify(BancoUsuarios));
    window.location.href = 'metaFinanceira.html'
}

initDadosMeta();
carregarMetas();
carregarBarraProgresso();