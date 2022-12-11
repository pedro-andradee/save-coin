# Plano de Testes de Software

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

- TRF-001
- TRF-002 A aplicação permitirá que o usuário realize a gestão de ganhos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` ganhos mensais. 

### Adicionar ganho
Com uma interface amigável e intuitiva, o usuário pode `ADICIONAR` um registro clicando em "Adicionar registro" na parte superior da tela. Em seguida adicionar os ganhos nos respectivos campos, clicar em "Adicionar lucro" e assim que o valor for mostrado abaixo dos campos, clicar em "Efetuar registro" para confirmar a Adição. 

![image](img/TESTES/testesDio1.jpg)

![image](img/TESTES/testesDio2.jpg)

### Visualizar ganho
Após adicionar um ganho, o mesmo pode ser visualizado diretamente na página de registro, onde pode `VISUALIZAR` o ganho adicionado, no mês escolhido. O ganho é representado por um icone de "+", abaixo do "Tipo"

![image](img/TESTES/testesDio3.jpg)

### Editar ganho
Para `EDITAR` o ganho, você deve clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, você poderá realizar a edição desejada e para salva clicar em "Efetuar registro" para confirmar a edição.

![image](img/TESTES/testesDio4.jpg)

![image](img/TESTES/testesDio5.jpg)

### Remover ganho
Depois de criar o ganho, para `REMOVER` o registro basta clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o resgitro clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

![image](img/TESTES/testesDio6.jpg)

![image](img/TESTES/testesDio7.jpg)

- TRF-003 A aplicação permitirá que o usuário realize a gestão de gastos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` gastos mensais. 

### Adicionar gasto
Com uma interface amigável e intuitiva, o usuário pode `ADICIONAR` um registro clicando em "Adicionar registro" na parte superior da tela. Em seguida adicionar os gastos nos respectivos campos, clicar em "Adicionar gasto" e assim que o valor for mostrado abaixo dos campos, clicar em "Efetuar registro" para confirmar a Adição. 

![image](img/TESTES/testesDio8.jpg)

![image](img/TESTES/testesDio9.jpg)

### Visualizar gasto
Após adicionar um gasto, o mesmo pode ser visualizado diretamente na página de registro, onde pode `VISUALIZAR` o gasto adicionado, no mês escolhido. O gasto é representado por um icone de "-", abaixo do "Tipo"

![image](img/TESTES/testesDio10.jpg)

### Editar gasto
Para `EDITAR` o gasto, você deve clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, você poderá realizar a edição desejada e para salva clicar em "Efetuar registro" para confirmar a edição.

![image](img/TESTES/testesDio11.jpg)

![image](img/TESTES/testesDio12.jpg)

### Remover gasto
Depois de criar o gasto, para `REMOVER` o registro basta clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o resgitro clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

![image](img/TESTES/testesDio13.jpg)

![image](img/TESTES/testesDio14.jpg)

- TRF-004
- TRF-005 A aplicação permitirá que o usuário realize a gestão de datas para lembretes financeiros na funcionalidade AGENDA

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

- TRF-006
- TRF-007 A aplicação apresentará o balanço financeiro mensal referente às receitas e despesas na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido no Registro Financeiro, o balanço númerico mensal referente às receitas e despesas, o usuário poderá `VISUALIZAR` toda vez que `ADICIONAR`, `ATUALIZAR` ou `REMOVER` um ganho ou gasto.

### Adicionar gasto ou ganho

![image](img/TESTES/testesDio15.jpg)

![image](img/TESTES/testesDio16.jpg)

### Editar gasto ou ganho

![image](img/TESTES/testesDio17.jpg)

### Remover gasto ou ganho

![image](img/TESTES/testesDio18.jpg)

O balanço númerico geral referente às receitas e despesas também pode ser visualizado na tela de `ADICIONAR`, `ATUALIZAR` ou `REMOVER` um ganho ou gasto.

![image](img/TESTES/testesDio19.jpg)

![image](img/TESTES/testesDio20.jpg)

- TRF-008 - A aplicação permitirá que o usuário realize a gestão de suas metas na funcionalidade META FINANCEIRA.

Foi desenvolvida a página Meta Financeira, onde o usuário pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` metas financeiras. 

### Adicionar Meta
Com uma interface amigável e intuitiva, o usuário pode ADICIONAR uma meta financeira clicando no botão amarelo "Adicionar nova meta". Em seguida, pode preencher os campos referentes à descrição, valor e a data final da meta. Para completar a adição da nova meta com os valores inseridos nos campos, basta clicar no botão "Salvar".
![image](img/TESTES/metaFinanceiraNovaMeta.png)
![image](img/TESTES/novaMetaFinanceiraModal.png)
Ao clicar em "Salvar" podemos ver que uma nova meta financeira foi criada.
![image](img/TESTES/novaMetaFinanceiraCriada.png)
- TRF-009
- TRF-010
- TRF-011


## Resultados Obtidos


|       Teste      | Página | Resultado do Teste | Responsável |
|---------|------------|--------------------------|----|
|TRF-001|-|-|AMANDA|
|TRF-002|-|-|AMANDA|
|TRF-003|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção dos ganhos na ferramenta Registro Financeiro.|DIOVANA|
|TRF-004|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção dos gastos na ferramenta Registro Financeiro.|DIOVANA|
|TRF-005|agenda.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção do lembrete na ferramenta Agenda.|GIANLUCA|
|TRF-006|-|-|GIOVANNY|
|TRF-007|AddRegistroFinanceiro.html e registroFinanceiro.html|O usuário foi capaz de realizar a leitura do balanco financeiro após a criação, atualização ou remoção dos ganhos e gastos na ferramenta Registro Financeiro.|GIOVANNY|
|TRF-008|metaFinanceira.html|O usuário foi capaz de realizar a criação, leitura, atualização e remoção das metas na ferramenta Meta Financeira.|PEDRO|
|TRF-009|-|-|GIOVANNY|
|TRF-010|-|-|ROMÁRIO|
|TRF-011|-|-|QUIZ|ROMÁRIO|


## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes dos requisitos funcionais, no ambiente de produção com início no dia 5 de Dezembro de 2022.

- ()
- ()
