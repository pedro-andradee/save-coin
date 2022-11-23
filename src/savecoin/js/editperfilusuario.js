let NomeCompleto = document.querySelector('#nomecopleto');
let ConfirmNovaSenha = document.querySelector('#confirmsenha');
let BtnExcluir = document.querySelector('#btn-excluir');

// inserir function pai para validar tudo 

document.querySelector("#LegendEditUsuario").innerHTML = "Olá, " + (usuarioCorrente.login) + "! Seja bem vindo ao seu perfil.";
document.getElementById('nomecompleto').setAttribute('placeholder', usuarioCorrente.nome);



function ValidEditPerfil() {

    let ConfereSenhaAtual = false;
    let ConfereNovaSenha = false;
    let ConfereConfirmSenha = false;

    function ValidSenhaAtual() {

        let SenhaAtual = document.querySelector('#senhaatual');
        let ValorSenhaAtual = SenhaAtual.value;
        let LabelSenhaAtual = document.querySelector('.labelsenhatual')

        if (ValorSenhaAtual !== usuarioCorrente.senha) {
            LabelSenhaAtual.setAttribute('style', 'color:#ff0000a6');
            LabelSenhaAtual.innerHTML = 'Senha atual *Não é essa'
            SenhaAtual.setAttribute('style', 'border-color: #ff0000a6');
            ConfereSenhaAtual = false;
        }
        else {
            LabelSenhaAtual.setAttribute('style', 'color:green');
            LabelSenhaAtual.innerHTML = 'Senha atual'
            SenhaAtual.setAttribute('style', 'border-color: green')
            ConfereSenhaAtual = true;
        }
        if (ValorSenhaAtual == "") {
            LabelSenhaAtual.setAttribute('style', 'color:#ff0000a6');
            LabelSenhaAtual.innerHTML = 'Senha atual * Campo Obrigátorio'
            SenhaAtual.setAttribute('style', 'border-color:#ff0000a6')
            ConfereSenhaAtual = false;
        }
    }
    ValidSenhaAtual()
    function ValidNovaSenha() {

        let NovaSenha = document.querySelector('#novasenha');
        let ValorNovaSenha = NovaSenha.value;
        let LabelNovaSenha = document.querySelector('.labelnovasenha');
        let QteNovaSenha = ValorNovaSenha.length;

        if (ValorNovaSenha == usuarioCorrente.senha) {
            alert("");
            LabelNovaSenha.setAttribute('style', 'color:#ff0000a6');
            LabelNovaSenha.innerHTML = 'Nova senha *A senha atual não pode ser igual a anterior.'
            NovaSenha.setAttribute('style', 'border-color: #ff0000a6');
            ConfereNovaSenha = false;
        }
        else{

        if (QteNovaSenha <= 5) {
            LabelNovaSenha.setAttribute('style', 'color:#ff0000a6');
            LabelNovaSenha.innerHTML = 'Nova senha *Insira uma senha com no mínimo 6 dígitos'
            NovaSenha.setAttribute('style', 'border-color: #ff0000a6');
            ConfereNovaSenha = false;
        }
        else {
            LabelNovaSenha.setAttribute('style', 'color:green');
            LabelNovaSenha.innerHTML = 'Nova senha'
            NovaSenha.setAttribute('style', 'border-color: green');
            ConfereNovaSenha = true;
        }

        if (ValorNovaSenha == "") {
            LabelNovaSenha.setAttribute('style', 'color:#ff0000a6');
            LabelNovaSenha.innerHTML = 'Nova senha *Campo Obrigátorio'
            NovaSenha.setAttribute('style', 'border-color:#ff0000a6');
            ConfereNovaSenha = false;
        }
    }}
    ValidNovaSenha()

    function ValidConfirmSenha() {

        let ConfirmSenha = document.querySelector('#confirmsenha');
        let ValorConfirmSenha = ConfirmSenha.value;
        let LabelConfirmSenha = document.querySelector('.labelconfirmsenha');
        let NovaSenha = document.querySelector('#novasenha');
        let ValorNovaSenha = NovaSenha.value;

        if (ValorConfirmSenha !== ValorNovaSenha) {
            LabelConfirmSenha.setAttribute('style', 'color:#ff0000a6');
            LabelConfirmSenha.innerHTML = 'Confirme a senha *As senhas não são iguais';
            ConfirmSenha.setAttribute('style', 'border-color: #ff0000a6');
            ConfereConfirmSenha = false;
        }
        else {
            LabelConfirmSenha.setAttribute('style', 'color:green');
            LabelConfirmSenha.innerHTML = 'Confirma senha';
            ConfirmSenha.setAttribute('style', 'border-color: green');
            ConfereConfirmSenha = true;
        }

        if (ValorConfirmSenha == "") {
            LabelConfirmSenha.setAttribute('style', 'color:#ff0000a6');
            LabelConfirmSenha.innerHTML = 'Confirm senha *Campo Obrigátorio';
            ConfirmSenha.setAttribute('style', 'border-color:#ff0000a6');
            ConfereConfirmSenha = false;
        }
    }
    ValidConfirmSenha()

    if(ConfereSenhaAtual && ConfereNovaSenha && ConfereConfirmSenha){
        console.log("Salvo com sucesso")

        $(document).ready(function() {
            $('#sucessmodal').modal('show');
        })

        setTimeout(() => { window.location.href = 'homepage.html' }, 3000);

    }

    else{
        console.log("Tem algo errado")


    }
}

function excluir() {
    alert("A conta seria excluida do JSON")
    setTimeout(() => { window.location.href = 'login.html' }, 500);
}
