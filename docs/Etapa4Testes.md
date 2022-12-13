# Plano de Testes de Software

|       ID      | Descrição do Teste  | Responsável |
|------|-----------------------------------------|----|
|TRF-001.1|teste referente ao RF-001|AMANDA
|TRF-002.1|teste referente ao RF-002|AMANDA|
|TRF-003.1|Adicionar um registro do tipo ganho|DIOVANA|
|TRF-003.2|Visualizar um registro do tipo ganho|DIOVANA|
|TRF-003.3|Editar um registro do tipo ganho|DIOVANA|
|TRF-003.4|Excluir um registro do tipo ganho|DIOVANA|
|TRF-004.1|Adicionar um registro do tipo gasto|DIOVANA|
|TRF-004.2|Visualizar um registro do tipo gasto|DIOVANA|
|TRF-004.3|Editar um registro do tipo gasto|DIOVANA|
|TRF-004.4|Excluir um registro do tipo gasto|DIOVANA|
|TRF-005.1|teste referente ao RF-005|GIANLUCA|
|TRF-006.1|teste referente ao RF-006|GIOVANNY|
|TRF-007.1|Ao adicionar um registro do tipo ganho, o valor do balanço deverá ser alterado positivamente na página de edição|GIOVANNY|
|TRF-007.2|Ao adicionar um registro do tipo gasto, o valor do balanço deverá ser alterado negativamentena página de edição|GIOVANNY|
|TRF-007.3|Ao adicionar um registro do tipo ganho, o valor do balanço deverá ser alterado positivamente na página de visualização|GIOVANNY|
|TRF-007.4|Ao adicionar um registro do tipo gasto, o valor do balanço deverá ser alterado negativamentena página de visualização|GIOVANNY|
|TRF-007.5|Ao editar um registro do tipo ganho, o valor do balanço deverá ser alterado positivamente ou negativamente na página de edição|GIOVANNY|
|TRF-007.6|Ao editar um registro do tipo gasto, o valor do balanço deverá ser alterado negativamente ou positivamente na página de edição|GIOVANNY|
|TRF-007.7|Ao editar um registro do tipo ganho, o valor do balanço deverá ser alterado positivamente ou negativamente na página de visualização|GIOVANNY|
|TRF-007.8|Ao editar um registro do tipo gasto, o valor do balanço deverá ser alterado negativamente ou positivamente na página de visualização|GIOVANNY|
|TRF-007.9|Ao remover um registro do tipo ganho, o valor do balanço deverá ser alterado negativamente na página de edição|GIOVANNY|
|TRF-007.10|Ao remover um registro do tipo gasto, o valor do balanço deverá ser alterado positivamente página de edição|GIOVANNY|
|TRF-007.11|Ao remover um registro do tipo ganho, o valor do balanço deverá ser alterado negativamente na página de visualização|GIOVANNY|
|TRF-007.12|Ao remover um registro do tipo gasto, o valor do balanço deverá ser alterado positivamente na página de visualização|GIOVANNY|
|TRF-008.1|teste referente ao RF-008|PEDRO|
|TRF-009.1|teste referente ao RF-009|GIOVANNY|
|TRF-010.1|teste referente ao RF-010|ROMÁRIO|
|TRF-011.1|teste referente ao RF-011|ROMÁRIO|


## Resultados Esperados

|       ID      | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001|A aplicação apresentará uma HOME PAGE para acesso a determinadas seções sem necessidade de login|ALTA|AMANDA
|RF-002|A aplicação apresentará graficamente os dados relativos às receitas e despesas dos últimos 12 na funcionalidade REGISTRO FINANCEIRO|MÉDIA|AMANDA|
|RF-003|A aplicação permitirá que o usuário realize a gestão dos valores de receitas mensais na funcionalidade REGISTRO FINANCEIRO|ALTA|DIOVANA|
|RF-004|A aplicação permitirá que o usuário realize a gestão dos valores de despesas mensais na funcionalidade REGISTRO FINANCEIRO|ALTA|DIOVANA|
|RF-005|A aplicação permitirá que o usuário realize a gestão de datas para lembretes financeiros na funcionalidade AGENDA|ALTA|GIANLUCA|
|RF-006|A aplicação permitirá que o usuário realize a gestão do seu perfil cadastrado na aplicação|MÉDIA|GIOVANNY|
|RF-007|A aplicação apresentará o balanço financeiro mensal referente às receitas e despesas na funcionalidade REGISTRO FINANCEIRO|ALTA|GIOVANNY|
|RF-008|A aplicação permitirá que o usuário realize a gestão de suas metas na funcionalidade META FINANCEIRA|ALTA|PEDRO|
|RF-009|A aplicação contará com uma LÓGICA DE ACESSO para controle de login de usuários e autorização de acesso às páginas|ALTA|GIOVANNY|
|RF-010|A aplicação apresentará uma seção com matérias destinadas à educação financeira na funcionalidade MATERIAL DE DIDÁTICO|ALTO|ROMÁRIO|
|RF-011|A aplicação permitirá que o usuário realize a avaliação de seus conhecimentos sobre educação financeira na funcionalidade QUIZ|ALTO|ROMÁRIO|


# Registro de Testes de Software

## RF-001 - A aplicação apresentará uma HOME PAGE para acesso a determinadas seções sem necessidade de login
## RF-002 - A aplicação apresentará graficamente os dados relativos às receitas e despesas dos últimos 12 na funcionalidade REGISTRO FINANCEIRO

## RF-003 - A aplicação permitirá que o usuário realize a gestão de ganhos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` ganhos mensais. 

### TRF-003.1 Adicionar ganho
`ADICIONAR` um registro: Clicar em "Adicionar registro" na parte superior da tela. Em seguida adicionar os ganhos nos respectivos campos (Descrição: sendo o nome do ganho / Valor: Sendo o valor númerico do seu ganho / Mês: entre Janeiro e Dezembro), clicar em "Adicionar lucro", abaixo dos campos e assim que o valor for mostrado abaixo do botão "Adicionar lucro", clicar em "Efetuar registro", no canto inferior direito, para confirmar a Adição. 

![image](img/TESTES/testesDio1.jpg)

![image](img/TESTES/testesDio2.jpg)

### TRF-003.2 Visualizar ganho
`VISUALIZAR` um registro: O mesmo pode ser visualizado diretamente na página de registro, no mês escolhido. O ganho é representado por um icone de "+", abaixo do "Tipo"

![image](img/TESTES/testesDio3.jpg)

### TRF-003.3 Editar ganho
`EDITAR` um registro: Clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, existe duas edições possíveis, adicionar um novo ganho nos respectivos campos (Descrição: sendo o nome do ganho / Valor: Sendo o valor númerico do seu ganho / Mês: entre Janeiro e Dezembro), clicar em "Adicionar lucro", abaixo dos campos e/ou excluir o ganho, clicando no icone de "lixeira" ao lado do ganho e para salva clicar em "Efetuar registro" para confirmar a edição.

![image](img/TESTES/testesDio4.jpg)

![image](img/TESTES/testesDio5.jpg)

### TRF-003.4 Excluir ganho
`REMOVER` um registro: Clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o ganho clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

![image](img/TESTES/testesDio6.jpg)

![image](img/TESTES/testesDio7.jpg)

## RF-004 - A aplicação permitirá que o usuário realize a gestão de gastos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` gastos mensais. 

### TRF-004.1 Adicionar gasto
`ADICIONAR` um registro: Clicar em "Adicionar registro" na parte superior da tela. Em seguida adicionar os gastos nos respectivos campos (Descrição: sendo o nome do gasto / Valor: Sendo o valor númerico do seu gasto / Mês: entre Janeiro e Dezembro), clicar em "Adicionar gasto", abaixo dos campos e assim que o valor for mostrado abaixo do botão "Adicionar gasto", clicar em "Efetuar registro", no canto inferior direito, para confirmar a Adição. 

![image](img/TESTES/testesDio8.jpg)

![image](img/TESTES/testesDio9.jpg)

### TRF-004.2 Visualizar gasto
`VISUALIZAR` um registro: O mesmo pode ser visualizado diretamente na página de registro, no mês escolhido. O gasto é representado por um icone de "-", abaixo do "Tipo"

![image](img/TESTES/testesDio10.jpg)

### TRF-004.3 Editar gasto
`EDITAR` um registro: Clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, existe duas edições possíveis, adicionar um novo gasto nos respectivos campos (Descrição: sendo o nome do gasto / Valor: Sendo o valor númerico do seu gasto / Mês: entre Janeiro e Dezembro), clicar em "Adicionar gasto", abaixo dos campos e excluir o gasto, clicando no icone de "lixeira" ao lado do gasto e para salva clicar em "Efetuar registro" para confirmar a edição.

![image](img/TESTES/testesDio11.jpg)

![image](img/TESTES/testesDio12.jpg)

### TRF-004.4 Excluir gasto
`REMOVER` um registro: Clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o gasto clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

![image](img/TESTES/testesDio13.jpg)

![image](img/TESTES/testesDio14.jpg)

## RF-005 - A aplicação permitirá que o usuário realize a gestão de datas para lembretes financeiros na funcionalidade AGENDA

Foi desenvolvido um calendário com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` lembretes. 

### Adicionar lembrete
Com uma interface amigável e intuitiva, o usuário pode `ADICIONAR` um lembrete na agenda clicando no ícone de + na parte superior da navbar do calendário. Em seguida adicionar os dados e salvar. 

![image](img/TESTES/createLembrete.png)

### Visualizar lembrete
Após adicionar um evento, o mesmo pode ser visualizado diretamente na agenda ou até mesmo pela navbar, onde pode `VISUALIZAR` o evento adicionado.

![image](img/TESTES/readLembrete.png)

### Editar lembrete
Para `EDITAR` o lembrete deve clicar duas vezes em cima do lembrete desejado ou clicar com o botão esquerdo do mouse, assim, abrindo um menu com a opção de edição, realizar a edição desejada e salvar.

![image](img/TESTES/updateLembrete.png)

### Remover lembrete
Depois de criar o lembrete, para `REMOVER` o evento basta clicar duas vezes em cima do lembrete desejado e apertar o botão de remover ou clicar com o botão esquerdo do mouse, assim, abrindo um menu com a opção de exclusão. Em ambas as formas aparecerá uma mensagem se o usuário deseja remover o lembrete.

![image](img/TESTES/deleteLembrete.png)


## RF-006 - A aplicação permitirá que o usuário realize a gestão do seu perfil cadastrado na aplicação

### Criar Conta

Caso o usuario não possua uma conta já cadastrada no sistema, o mesmo pode criar e `ADICIONAR` uma clicando em "Não possui uma conta? Clique aqui e Cadastre-se", após isto preencher corretamente os campos de novo usuario (Usuario, nome completo, e-mail, senha, confirmação de senha)  e clicando no botão "salvar" os dados do usuario serão `ADICIONADOS` ao sistema com um ID único, possibilitando ao usuario efetuar login posteriormente sem a necessidade de criar outra conta. 

![image](img/TESTES/telalogin.png)
![image](img/TESTES/modallogin.PNG)
![image](img/TESTES/fazendologin.PNG)

### Editar Conta

Para `EDITAR` informações da conta é necessario estar logado e após isso clicar na barra de navegação em "Editar Perfil". Após acessar a pagina 'Perfil do Usuario' o mesmo pode alterar as informações como o nome e inserir uma nova senha (após uma validação com a senha atual), e basta clicar no botão "Salvar" que as alterações serão realizadas.

![image](img/TESTES/navbareditperfil.PNG)
![image](img/TESTES/editperfil1.PNG)
![image](img/TESTES/editperfilnomealterado.PNG)
![image](img/TESTES/editperfilnomealterado2.PNG)
### Excluir Conta

Para `EXCLUIR` a conta, o usuario deve estar logado, e dentro da página 'Perfil do Usuario' o mesmo deve clicar no botão "excluir" destacado em vermelho. Após isso clicar novamente no botão "excluir" que irá aparecer dentro de uma janela para confirmar a vontade do usuario.

![image](img/TESTES/editperfil2.PNG)
![image](img/TESTES/modalexcluir.PNG)
![image](img/TESTES/excluidologin.PNG)


## RF-007 - A aplicação apresentará o balanço financeiro mensal referente às receitas e despesas na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido no Registro Financeiro, o balanço númerico mensal referente às receitas e despesas, o usuário poderá `VISUALIZAR` toda vez que `ADICIONAR`, `ATUALIZAR` ou `REMOVER` um ganho ou gasto, na tela de edição e de visualização dos registros.

### TRF-007.1 ao TRF-007.4 Adicionar gasto ou ganho

![image](img/TESTES/testesDio15.jpg)

![image](img/TESTES/testesDio16.jpg)

### TRF-007.5 ao TRF-007.8 Editar gasto ou ganho

![image](img/TESTES/testesDio17.jpg)

### TRF-007.9 ao TRF-007.12  Remover gasto ou ganho

![image](img/TESTES/testesDio18.jpg)

O balanço númerico geral referente às receitas e despesas também pode ser visualizado na tela de `ADICIONAR`, `ATUALIZAR` ou `REMOVER` um ganho ou gasto.

![image](img/TESTES/testesDio19.jpg)

![image](img/TESTES/testesDio20.jpg)

## RF-008 - A aplicação permitirá que o usuário realize a gestão de suas metas na funcionalidade META FINANCEIRA.

Foi desenvolvida a página Meta Financeira, onde o usuário pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR O VALOR DEPOSITADO`, `EDITAR` e `REMOVER` metas financeiras. 

### Adicionar Meta
Com uma interface amigável e intuitiva, o usuário pode ADICIONAR uma meta financeira clicando no botão amarelo "Adicionar nova meta". Em seguida, pode preencher os campos referentes à descrição, valor e a data final da meta. Para completar a adição da nova meta com os valores inseridos nos campos, basta clicar no botão "Salvar".

![image](img/TESTES/metaFinanceiraNovaMeta.png)
![image](img/TESTES/novaMetaFinanceiraModal.png)
Após clicar em "Salvar", pode-se VISUALIZAR que uma nova meta financeira foi criada.

![image](img/TESTES/novaMetaFinanceiraCriada.png)

### Visualizar Meta
Ao entrar na página de metas financeiras serão carregadas as metas já cadastradas pelo usuário.

![image](img/TESTES/novaMetaFinanceiraCriada.png)

### Atualizar valor depositado para a cumprir a meta
Para ATUALIZAR a quantia já depositada na meta, o usuário clicará no botão "Nova Entrada". Em seguida, abrirá um modal em que o usuário irá preencher o campo com o valor a ser depositado, referente ao valor guardado para cumprir a meta. Por fim, clicando no botão "Salvar" o usuário finaliza o processo de atualizar o valor depositado da meta.

![image](img/TESTES/addNovaEntradaMeta.png)
Após salvar, o usuário verá a atualização do valor referente à quantia que falta para cumprir a meta e a atualização da barra verde que indica o progresso para atingir a meta.

![image](img/TESTES/atualizacaoNovaEntradaMeta.png)

### Editar Meta
Para EDITAR a descrição, o valor ou a data da meta, o usuário clicará no botão "Editar". Em seguida, abrirá um modal em que o usuário irá preencher os campos com os valores atuais da meta, modificando os valores desejados. Por fim, ao clicar no botão "Salvar", o usuário conseguirá ver a meta com os novos valores.

![image](img/TESTES/editarMetaFinanceira.png)
![image](img/TESTES/metaFinanceiraEditada.png)

### Remover Meta
Com uma interface intuitiva, o usuário clicará no botão com um "X" vermelho dentro de um círculo para REMOVER a meta selecionada. Em seguida, abrirá um modal em que irá confirmar o seu desejo de remoção. Por fim, ao clicar no botão "Excluir", a exclusão será realizada.

![image](img/TESTES/modalExcluirMetaFinanceira.png)
![image](img/TESTES/telaAposExclusaoMeta.png)


## RF-009 - A aplicação contará com uma LÓGICA DE ACESSO para controle de login de usuários e autorização de acesso às páginas.
A aplicação permitirá que o usuário acesse páginas e recursos especificos (Agenda, Meta financeira, Registro financeiro e Perfil do Usuario) somente após efetuado o login, caso contrario o mesmo verá um alerta e será redimensionado para a página de login, para efetivar o login ou criar uma conta.

![image](img/TESTES/validlogin1.PNG)
![image](img/TESTES/validlogin2.PNG)
![image](img/TESTES/validlogin3.PNG)
![image](img/TESTES/validlogin4.PNG)

## RF-010 - A aplicação apresentará uma seção com matérias destinadas à educação financeira na funcionalidade MATERIAL DE DIDÁTICO.
Foram desenvolvidas diversas páginas com artigos sobre educação fincanceira para jovens e estas foram agrupadas em uma página de fácil navegação, onde o usuário poderá escolher entre os artigos disponíveis para leitura.

### Escolher Artigo
Página MATERIAL DIDÁTICO:

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/HMD.png" width="1020px">

Com uma interface amigável e intuitiva, o usuário pode `ESCOLHER` um artigo para leitura apenas clicando no botão `APRENDA` e em seguida será direcionado a uma página contendo o artigo na íntegra. 

Página ARTIGO:

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/A01.png" width="1020px">

## RF-011 - A aplicação permitirá que o usuário realize a avaliação de seus conhecimentos sobre educação financeira na funcionalidade QUIZ.
Foi desenvolvida uma página com um jogo interativo de perguntas e respostas sobre conhecimentos em educação fincanceira baseado nos artigos disponívels na aba MATERIAL DIDÁTICO. 

O quiz é composto de seis perguntas, contendo três opções de resposta e apenas uma correta. O quiz conta com um marcador de pontos, uma barra de progesso.
<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 01.png" width="1020px">

Ao passar o mouse sobre uma alternativa, esta receberá um destaque visual.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 02.png" width="1020px">

Ao escolher uma alternativa, será acionado um destaque visual, verde para acerto, e uma notificação sonora:

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 03.png" width="1020px">

Ao escolher uma alternativa, será acionado um destaque visual, vermelho para erro, e uma notificação sonora:

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 04.png" width="1020px">

Em seguida será exibida uma nova perguta.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 05.png" width="1020px">

Os processos anteriores são repetidos, até o final das perguntas.
Ao fim do quiz, será exibida uma tela com a informação "Fim de Jogo!", a pontuação final do jogador, e uma notificação sonora de aplausos para pontuações altas.
<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 06.png" width="1020px">






## Resultados Obtidos


|       Teste      | Página | Resultado do Teste | Responsável |
|---------|------------|--------------------------|----|
|TRF-001|-|-|AMANDA|
|TRF-002|-|-|AMANDA|
|TRF-003|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção dos ganhos na ferramenta Registro Financeiro.|DIOVANA|
|TRF-004|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção dos gastos na ferramenta Registro Financeiro.|DIOVANA|
|TRF-005|agenda.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção do lembrete na ferramenta Agenda.|GIANLUCA|
|TRF-006|login.html, editperfilusuario.html e footer.html |O usuario foi capaz de criar uma conta, alterar as informações da conta e excluir a mesma.|GIOVANNY|
|TRF-007|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a leitura do balanco financeiro após a criação, atualização ou remoção dos ganhos e gastos na ferramenta Registro Financeiro.|GIOVANNY|
|TRF-008|metaFinanceira.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção das metas na ferramenta Meta Financeira.|PEDRO|
|TRF-009|TODAS|A aplicação não permitiu acesso as páginas e recursos: Agenda, Meta financeira, Registro financeiro e Perfil do Usuario quando o usuario não estava logado. |GIOVANNY|
|TRF-010|hArticle.html e articleXX.hmtl|O usuário foi capaz de navegar entre os conteúdos disponíveis para leitura na ferramenta MATERIAL DIDÁTICO.|ROMÁRIO|
|TRF-011|quiz.html|O usuário foi capaz de interagir e testar seus conhecimentos na ferramenta QUIZ.|ROMÁRIO|


## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes dos requisitos funcionais, no ambiente de produção com início no dia 11 de Dezembro de 2022 e mediante o apresentado, concluímos que a plataforma está APROVADA.
