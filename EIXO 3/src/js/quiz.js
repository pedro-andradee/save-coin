let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0
let placar = 0

let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    correta: "0",
}

const q1 = {
    numQuestao: 1,
    pergunta: "Ao aplicar o Método 50/30/20:",
    alternativaA: "50% da renda mensal é destinada às despesas variáveis.",
    alternativaB: "30% da renda mensal é destinada às despesas fixas e essenciais.",
    alternativaC: "20% da renda mensal é destinada às prioridades financeiras.",
    correta: "20% da renda mensal é destinada às prioridades financeiras.",
}

const q2 = {
    numQuestao: 2,
    pergunta: "Qual destas é uma boa prática financeira:",
    alternativaA: "Trabalhar com métodos.",
    alternativaB: "Consumir por impulso.",
    alternativaC: "Gastar mais do que ganha.",
    correta: "Trabalhar com métodos.",
}

const q3 = {
    numQuestao: 3,
    pergunta: "O que é considerado no consumo consciente?",
    alternativaA: "O valor financeiro do bem a ser adquirido",
    alternativaB: "O impacto do bem no meio ambiente e na sociedade.",
    alternativaC: "O valor de revenda do bem após o breve tempo de uso",
    correta: "O impacto do bem no meio ambiente e na sociedade.",
}

const q4 = {
    numQuestao: 4,
    pergunta: "O que é uma reserva de emergência?",
    alternativaA: "Um valor guardado que você economizou em tempos difíceis.",
    alternativaB: "Um valor guardado que será destinado a aproveitar boas oportunidades de negócios.",
    alternativaC: "Um valor guardado que está disponível para custear gastos necessários que estavam fora do orçamento.",
    correta: "Um valor guardado que está disponível para custear gastos necessários que estavam fora do orçamento.",
}

const q5 = {
    numQuestao: 5,
    pergunta: "O cartão de crédito é:",
    alternativaA: "Uma forma de pagamento onde o valor da compra é cobrado ao usuário em uma fatura com data posterior à compra.",
    alternativaB: "Uma forma de pagamento em que você deve recarregar o cartão com dinheiro antes de realizar a compra.",
    alternativaC: "Uma forma de pagamento onde o valor da compra é descontado imediatamente na conta bancária do usuário após a compra.",
    correta: "Uma forma de pagamento onde o valor da compra é cobrado ao usuário em uma fatura com data posterior à compra.",
}

const q6 = {
    numQuestao: 6,
    pergunta: "É considerado um objetivo médio prazo:",
    alternativaA: "Fazer uma viagem nas férias.",
    alternativaB: "Comprar um ou vários imóveis.",
    alternativaC: "Realizar uma reforma na casa.",
    correta: "Realizar uma reforma na casa.",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    progresso.value = parseInt(progresso.value) + 1
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')

}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)
    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta
    if (respostaEscolhida == certa) {
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10
    } else {
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 600);

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function () {
        proxima = numeroDaQuestao + 1
        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 600)
    desbloquearAlternativas()
}

function fimDoJogo() {

    if (pontos > 40) {somAplausos.play()}
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function () {
        pontos = 0
        location.reload();
    }, 3000)
}