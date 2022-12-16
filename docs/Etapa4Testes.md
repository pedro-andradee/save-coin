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
|TRF-005.1|Ao adicionar um lembrete na Agenda, o lembrete deve ser visualizado na Agenda|GIANLUCA|
|TRF-005.2|Após a adição de um lembrete, deverá ser possível visualizar o lembrete na Agenda|GIANLUCA|
|TRF-005.3|Ao editar um lembrete na Agenda, as informações modificadas devem ser atualizadas|GIANLUCA|
|TRF-005.4|Após a edição de um lembrete, deverá ser possível visualizar o lembrete editado na Agenda|GIANLUCA|
|TRF-005.5|Ao excluir um lembrete na Agenda, o lembrete não deverá aparecer na Agenda|GIANLUCA|
|TRF-005.6|Após a remoção de um lembrete, não deverá ser possível visualizar o lembrete Agenda|GIANLUCA|
|TRF-005.7|Ao exportar um lembrete da Agenda, o lembrete deve ser baixado no dispositivo do usuário|GIANLUCA|
|TRF-005.8|Após a exportação de um lembrete, deverá ser possível visualizar o lembrete no dispositivo do usuário|GIANLUCA|
|TRF-006.1|Criar uma conta e fazer login|GIOVANNY|
|TRF-006.2|Editar informações da conta|GIOVANNY|
|TRF-006.3|Excluir a conta do sistema|GIOVANNY|
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
|TRF-008.1|Adicionar uma meta financeira|PEDRO|
|TRF-008.2|Visualizar meta financeira|PEDRO|
|TRF-008.3|Atualizar o valor depositado para cumprir uma meta financeira|PEDRO|
|TRF-008.4|Editar uma meta financeira|PEDRO|
|TRF-008.5|Remover uma meta financeira|PEDRO|
|TRF-009.1|Acessar as páginas: Agenda, Meta financeira, Registro financeiro e Perfil do Usuario somente quando estiver logado|GIOVANNY|
|TRF-010.1|Acessar a página Material Didático e navegar por seus artigos sem precisar estar logado|ROMÁRIO|
|TRF-011.1|Acessar a página Quiz sem precisar estar logado e interagir com o jogo|ROMÁRIO|


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
|RF-010|A aplicação apresentará uma seção com matérias destinadas à educação financeira na página MATERIAL DE DIDÁTICO|ALTO|ROMÁRIO|
|RF-011|A aplicação permitirá que o usuário realize a avaliação de seus conhecimentos sobre educação financeira na página QUIZ|ALTO|ROMÁRIO|


# Registro de Testes de Software

## RF-001 - A aplicação apresentará uma HOME PAGE para acesso a determinadas seções sem necessidade de login
## RF-002 - A aplicação apresentará graficamente os dados relativos às receitas e despesas dos últimos 12 na funcionalidade REGISTRO FINANCEIRO

## RF-003 - A aplicação permitirá que o usuário realize a gestão de ganhos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` ganhos mensais. 

### TRF-003.1 Adicionar ganho
`ADICIONAR` um registro: Clicar em "Adicionar registro" na parte superior da tela. Em seguida adicionar os ganhos nos respectivos campos (Descrição: sendo o nome do ganho / Valor: Sendo o valor númerico do seu ganho / Mês: entre Janeiro e Dezembro), clicar em "Adicionar lucro", abaixo dos campos e assim que o valor for mostrado abaixo do botão "Adicionar lucro", clicar em "Efetuar registro", no canto inferior direito, para confirmar a Adição. 
### TRF-003.2 Visualizar ganho
`VISUALIZAR` um registro: O mesmo pode ser visualizado diretamente na página de registro, no mês escolhido. O ganho é representado por um icone de "+", abaixo do "Tipo"
### TRF-003.3 Editar ganho
`EDITAR` um registro: Clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, existe duas edições possíveis, adicionar um novo ganho nos respectivos campos (Descrição: sendo o nome do ganho / Valor: Sendo o valor númerico do seu ganho / Mês: entre Janeiro e Dezembro), clicar em "Adicionar lucro", abaixo dos campos e/ou excluir o ganho, clicando no icone de "lixeira" ao lado do ganho e para salva clicar em "Efetuar registro" para confirmar a edição.
### TRF-003.4 Excluir ganho
`REMOVER` um registro: Clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o ganho clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

[![Video Teste: Registro Ganhos](https://drive.google.com/file/d/11GvuqEGdSChMwkSkUU2fw8_BaheFr0VP/view)](https://drive.google.com/file/d/11GvuqEGdSChMwkSkUU2fw8_BaheFr0VP/view)

## RF-004 - A aplicação permitirá que o usuário realize a gestão de gastos mensais na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido uma seção de registro com interação do usuário, onde o mesmo pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR` e `REMOVER` gastos mensais. 

### TRF-004.1 Adicionar gasto
`ADICIONAR` um registro: Clicar em "Adicionar registro" na parte superior da tela. Em seguida adicionar os gastos nos respectivos campos (Descrição: sendo o nome do gasto / Valor: Sendo o valor númerico do seu gasto / Mês: entre Janeiro e Dezembro), clicar em "Adicionar gasto", abaixo dos campos e assim que o valor for mostrado abaixo do botão "Adicionar gasto", clicar em "Efetuar registro", no canto inferior direito, para confirmar a Adição. 
### TRF-004.2 Visualizar gasto
`VISUALIZAR` um registro: O mesmo pode ser visualizado diretamente na página de registro, no mês escolhido. O gasto é representado por um icone de "-", abaixo do "Tipo"
### TRF-004.3 Editar gasto
`EDITAR` um registro: Clicar no icone de edição, abaixo do "Editar", assim, você será redirecionado ao menu de edições, existe duas edições possíveis, adicionar um novo gasto nos respectivos campos (Descrição: sendo o nome do gasto / Valor: Sendo o valor númerico do seu gasto / Mês: entre Janeiro e Dezembro), clicar em "Adicionar gasto", abaixo dos campos e excluir o gasto, clicando no icone de "lixeira" ao lado do gasto e para salva clicar em "Efetuar registro" para confirmar a edição.
### TRF-004.4 Excluir gasto
`REMOVER` um registro: Clicar no icone de exclusão, abaixo do "Deletar", assim, você será redirecionado a um menu com a opção de exclusão, nele, basta remover o gasto clicando no icone de "lixeira" e para salva clicar em "Efetuar registro" para confirmar a exclusão.

[![Video Teste: Registro de Gastos](https://drive.google.com/file/d/1J5dDCl2P76Sb1cxtZgS5NrG7O7NfU6qM/view)](https://drive.google.com/file/d/1J5dDCl2P76Sb1cxtZgS5NrG7O7NfU6qM/view)

## RF-005 - A aplicação permitirá que o usuário realize a gestão de datas para lembretes financeiros na funcionalidade AGENDA

### TRF-005.1 & 2 - Adicionar lembrete

#### Teste adicionando lembrete:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a tela de Login e realizar o Login|
| 2 |Clicar no ícone da Agenda|
| 3 |Abrirá a página da Agenda: `agenda.html`|
| 4 |Clicar no ícone de "+" localizado no canto superior direito da Agenda|
| 5 |Abrirá um modal onde será possível inserir os dados do lembrete|
| 6 |Após inserir os dados, clicar o botão "Adicionar"|
| 7 |O lembrete foi adicionado na agenda|

|        **Lembrete Adicionado✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1RoWpWxvv94v_mm-xu-YaEthZD8JmNr4a/view?usp=sharing">**Video Teste: adicionando lembrete (00:00 à 00:29)**</a>|

### TRF-005.3 & 4 - Aditar lembrete

#### Teste editando lembrete:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a tela de Login e realizar o Login|
| 2 |Clicar no ícone da Agenda|
| 3 |Abrirá a página da Agenda: `agenda.html`|
| 4 |Clicar em cima do lembrete desejado para edição com o botão direito, abrirá um menu onde será possível clicar em "Editar o lembrete"|
| 5 |Abrirá um modal onde será possível inserir os dados do lembrete|
| 6 |Após atualizar os dados do lembrete, clicar no botão "Atualizar"|
| 7 |O lembrete foi atualizado na agenda|

|        **Lembrete Editado✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1RoWpWxvv94v_mm-xu-YaEthZD8JmNr4a/view?usp=sharing">**Video Teste: editando lembrete (00:29 à 00:46)**</a>|

### TRF-005.5 & 6 - Excluir lembrete

#### Teste excluindo lembrete:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a tela de Login e realizar o Login|
| 2 |Clicar no ícone da Agenda|
| 3 |Abrirá a página da Agenda: `agenda.html`|
| 4 |Clicar em cima do lembrete desejado para exclusão com o botão direito, abrirá um menu onde será possível clicar em "Remover"|
| 5 |Abrirá um modal de confirmação para a exclusão|
| 6 |Após clicar no botão "Sim", o lembrete será excluído da Agenda|
| 7 |O lembrete foi excluído na agenda|

|        **Lembrete Excluído✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1RoWpWxvv94v_mm-xu-YaEthZD8JmNr4a/view?usp=sharing">**Video Teste: excluindo lembrete (00:46 à 00:56)**</a>|

### TRF-005.7 & 8 - Exportar lembrete

#### Teste exportando lembrete:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a tela de Login e realizar o Login|
| 2 |Clicar no ícone da Agenda|
| 3 |Abrirá a página da Agenda: `agenda.html`|
| 4 |Clicar no ícone da "seta" localizado no canto superior direito da Agenda|
| 5 |Abrirá um modal onde será possível escolher as opções de exportação|
| 6 |Após clicar no botão "Salavar", os lembretes serão baixados no dispositivo do usuário|
| 7 |Clicar no arquivo baixado e aparecerá seus eventos adicionados na Agenda|

|        **Lembrete Exportado✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1RoWpWxvv94v_mm-xu-YaEthZD8JmNr4a/view?usp=sharing">**Video Teste: exportando lembrete (00:56 à 01:33)**</a>|


## RF-006 - A aplicação permitirá que o usuário realize a gestão do seu perfil cadastrado na aplicação

### TRF-006.1 - Criar conta

#### Teste criando uma conta no sistema:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a tela de Login|
| 2 |Clicar em "Não possui uma conta? Clique aqui e Cadastre-se"|
| 3 |Esperar abrir uma Janela para ser preenchida as informações do novo usuario|
| 4 |Preencher os campos: Nome, Nome completo, E-mail, Senha e confirmação de senha. (No teste de exemplo foi inserido as seguintes informações: Nome:giovanny, Nome Completo: giovanny sales, E-mail: giovanny1412@gmail.com, Senha:giovanny1412 e Confirmação de senha: giovanny1412)|
| 5 |Clicar em "Salvar" abaixo da janela modal|
| 6 |Aguardar a mensagem "Usuario cadastrado com sucesso"|
| 7 |Aguardar ser redimensionado para a homepage|

|        **Conta criada✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1vdATpyI6zdUqw7Ctk1oVCx_v9xnsAMra/view?usp=share_link">**Video Teste: criando conta (00:00 à 00:56)**</a>|




#### Teste Logando no sistema após criar a conta:

| Passo |Descrição|
| :------: |:---------------------|
|1|Na página da homepage clicar no ícone de perfil na barra de navegações (Localizado no canto superior direito da tela)|
|2|Aguardar aparecer a opção "Fazer login"|
|3|Clicar em "Fazer login"|
|4|Aguardar ser redimensionado para a tela de Login|
|5|Inserir o E-mail e senha da conta criada (No teste de exemplo em questão as informações são: E-mail:giovanny1412@gmail.com e Senha:giovanny1412)|
|6|Clicar no botão "Entrar"|
|7|Aguardar a mensagem informando "Efetuando login"|
|8|Aguardar ser redimensionado para a homepage|

|        **Login Efetuado✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1vdATpyI6zdUqw7Ctk1oVCx_v9xnsAMra/view?usp=share_link">Video Teste: fazendo login (00:56 à 01:25)</a>|

### TRF-006.2 - Editar Conta

#### Teste editando nome da conta no sistema:

| Passo |Descrição|
| :------: |:---------------------|
|1|Efetuar o login|
|2|Clicar no ícone de perfil na barra de navegações (Localizado no canto superior direito da tela)|
|3|Clicar em "Editar Perfil"|
|4|Aguardar ser redimensionado para a tela de Perfil de usuario|
|5|Alterar no campo nome completo inserindo o novo nome desejado (No teste de exemplo em questão o nome a ser inserido é: "Giovanny Nome Alterado")|
|6|Digitar a senha atual da conta no campo "Senha atual" (No teste de exemplo em questão a senha atual é: giovanny1412)|
|7|Clicar no botão "Salvar"|
|8|Aguardar a mensagem do sistema informando "Alterações salvas com sucesso"|
|9|A pagina retornara para a tela e Perfil de usuario, porem com a alteração no nome realizada|

|        **Nome Alterado✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/14BNRer1fUVtdutvTSHsx09BuQirrTYOB/view?usp=sharing">Video Teste: Editando nome da conta (00:00 à 01:01)</a>|

#### Teste alterando a senha da conta:

| Passo |Descrição|
| :------: |:---------------------|
|1|Efetuar o login|
|2|Clicar no ícone de perfil na barra de navegações (Localizado no canto superior direito da tela)|
|3|Clicar em "Editar Perfil"|
|4|Aguardar ser redimensionado para a tela de Perfil de usuario|
|5|Digitar a senha atual da conta no campo "Senha atual" (No teste de exemplo em questão a senha atual é: giovanny1412)|
|6|Digitar a nova senha desejada no campo "Nova senha" (No teste de exemplo em questão a nova senha é: giovanny123)|
|7|Digitar a nova senha desejada no campo "Confirme a senha"|
|8|Clicar no botão "Salvar"|
|9|Aguardar a mensagem do sistema informando "Alterações salvas com sucesso"|
|10|A pagina retornara para a tela e Perfil de usuario, porem com a alteração de senha realizada|

|        **Senha Alterada✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/14BNRer1fUVtdutvTSHsx09BuQirrTYOB/view?usp=sharing">Video Teste: Editando nome da conta (01:01 à 01:40)</a>|

### TRF-006.3 - Excluir Conta

#### Teste excluindo a conta do sistema:

| Passo |Descrição|
| :------: |:---------------------|
|1|Efetuar o login|
|2|Clicar no ícone de perfil na barra de navegações (Localizado no canto superior direito da tela)|
|3|Clicar em "Editar Perfil"|
|4|Aguardar ser redimensionado para a tela de Perfil de usuario|
|5|Clicar no botão "Excluir" destacado em vermelho|
|6|Aguardar aparecer uma janela de confirmação do sistema|
|7|Clicar novamente em "Excluir" na janela que apareceu|
|8|Aguardar ser redimensionado para a tela de login|

|        **Conta Excluida✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/14BNRer1fUVtdutvTSHsx09BuQirrTYOB/view?usp=sharing">Video Teste: Editando nome da conta (01:40 à 02:13)</a>|


## RF-007 - A aplicação apresentará o balanço financeiro mensal referente às receitas e despesas na funcionalidade REGISTRO FINANCEIRO

Foi desenvolvido no Registro Financeiro, o balanço númerico mensal referente às receitas e despesas, o usuário poderá `VISUALIZAR` toda vez que `ADICIONAR`, `ATUALIZAR` ou `REMOVER` um ganho ou gasto, na tela de edição e de visualização dos registros.

### TRF-007.1 ao TRF-007.4 Adicionar gasto ou ganho
### TRF-007.5 ao TRF-007.8 Editar gasto ou ganho
### TRF-007.9 ao TRF-007.12  Remover gasto ou ganho

[![Video Teste: Balanço Financeiro](https://drive.google.com/file/d/1YIAEzKZ6cipz06D1HF6zbPGK0DIqV3E2/view)](https://drive.google.com/file/d/1YIAEzKZ6cipz06D1HF6zbPGK0DIqV3E2/view)

## RF-008 - A aplicação permitirá que o usuário realize a gestão de suas metas na funcionalidade META FINANCEIRA.

Foi desenvolvida a página Meta Financeira, onde o usuário pode `ADICIONAR`, `VISUALIZAR`, `ATUALIZAR O VALOR DEPOSITADO`, `EDITAR` e `REMOVER` metas financeiras. 

### Teste: Adicionar Meta

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Clicar no botão amarelo "Adicionar nova meta"|
| 2 |Preencher os campos do formulário presentes no modal. Valores usados: Campo Descrição da meta: Livro de ciências; Campo valor da meta: 150; Campo data para atingir a meta: 30/12/2022|
| 3 |Para completar a adição da nova meta com os valores inseridos nos campos, clicar no botão amarelo "Salvar"|

|   **Teste: Adicionar uma meta financeira**   |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1kPVYv_PT9TCqoEN1RV8eS49zkcjxwP3_/view?usp=sharing">Video Teste: Adicionar uma meta financeira</a>|

### Teste: Visualizar Meta

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Entrar na página de Metas Financeiras|
| 2 |Visualizar as metas cadastradas pelo usuário|

|   **Teste: Visualizar meta financeira**   |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1e07PkMUnNnoG4wSCMjEc7aGdYEeLIvc-/view?usp=sharing">Video Teste: Visualizar meta financeira</a>|

### Teste: Atualizar valor depositado para a cumprir uma meta financeira

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Clicar no botão amarelo "Nova Entrada"|
| 2 |Preencher o campo do formulário presente no modal. Valor usado para a nova entrada: 50|
| 3 |Para completar a atualização do valor depositado com o valor inserido no campo, clicar no botão amarelo "Salvar"|

|   **Teste: Atualizar valor depositado**   |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1XNAoflIbSWwBkoBeBMxkNmTVR8JVDjHc/view?usp=sharing">Video Teste: Atualizar valor depositado</a>|

### Teste: Editar Meta

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Clicar no botão amarelo "Editar"|
| 2 |Preencher os campos do formulário presentes no modal. Valores usados: Campo Descrição da meta: Livro de física; Campo valor da meta: 150; Campo data para atingir a meta: 30/12/2022|
| 3 |Para completar a edição da meta com os valores inseridos nos campos, clicar no botão amarelo "Salvar"|

|   **Teste: Editar uma meta financeira**   |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1-2-bNrPbavZDI0ybQjeQ4gCJd7odCBIo/view?usp=sharing">Video Teste: Editar uma meta financeira</a>|

### Teste: Remover Meta

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Clicar no botão com um "X" vermelho dentro de um círculo vermelho para REMOVER a meta selecionada|
| 2 |Para completar a remoção da meta, clicar no botão vermelho "Excluir"|

|   **Teste: Remover uma meta financeira**   |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1tZ6jTANWkIhaxdNwRyVJLiMUJZ158jd2/view?usp=sharing">Video Teste: Remover uma meta financeira</a>|

## RF-009 - A aplicação contará com uma LÓGICA DE ACESSO para controle de login de usuários e autorização de acesso às páginas.

### TRF-009.1 Controle de login

#### Teste de acesso restrito a usuarios logado:

A aplicação permitirá que o usuário acesse páginas e recursos especificos (Agenda, Meta financeira, Registro financeiro e Perfil do Usuario) somente após efetuado o login, caso contrario o mesmo verá um alerta e será redimensionado para a página de login, para efetivar o login e/ou criar uma conta.

|        **Controle de Login✅**       |
|:------------------------------:|
|<a href= "https://drive.google.com/file/d/1E7YovSpTfcUq-kHHBuvdU2qfBxt2FImo/view?usp=sharing">Video Teste: Tentando acessar sem Login (00:00 à 01:05)</a>|
|<a href= "https://drive.google.com/file/d/1E7YovSpTfcUq-kHHBuvdU2qfBxt2FImo/view?usp=sharing">Video Teste: Tentando acessar com Login (01:05 à 01:45)</a>|


## RF-010 - A aplicação apresentará uma seção com matérias destinadas à educação financeira na página MATERIAL DE DIDÁTICO.

### Teste: Acesso e Navegação:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a página Material Didático sem precisar estar logado|
| 2 |Visualizar todos os artigos disponíveis para leitura, em layout de "cards", na página Material Didátic|
| 3 |Acessar os artigos disponíveis para leitura através do botão "Aprenda" disponível nos "cards"|
| 4 |Visualizar o artigo na íntegra para leitura|

Visualização do teste:


## RF-011 - A aplicação permitirá que o usuário realize a avaliação de seus conhecimentos sobre educação financeira na página QUIZ.

### Teste: Acesso e Interação:

| Passo |Descrição|
| :------: |:---------------------|
| 1 |Acessar a página Quiz sem precisar estar logado|
| 2 |Visualizar o quiz contendo diversos itens interativos|
| 3 |Visualizar da mensagem de instrução do quiz|
| 4 |Visualizar a pergunta e três alternativas de respostas|
| 5 |Notificação visual, na cor amarela, ao passar o mouse sobre uma resposta|
| 6 |Visualização da barra de progresso do quiz|
| 7 |Notificação visual, na cor verde, e notificação sonora ao escolher a alternativa correta|
| 8 |Notificação visual, na cor vermelha, e notificação sonora ao escolher a alternativa errada|
| 9 |Visualização da questão seguinte|
| 10 |Visualização da pontuação|
| 11 |Repetição dos processos anteriores para cada questão do quiz|
| 12 |Notificação sonora ao final do quiz para placares maiores que 50 pontos|
| 13 |Redirecionamento para a questão inicial do quiz|

Visualização do teste:


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
|TRF-009|TODAS|A aplicação só permitiu acesso as páginas e recursos: Agenda, Meta financeira, Registro financeiro e Perfil do Usuario quando o usuario estava logado. |GIOVANNY|
|TRF-010|hArticle.html e articleXX.hmtl|O usuário foi capaz de navegar entre os conteúdos disponíveis para leitura na página MATERIAL DIDÁTICO.|ROMÁRIO|
|TRF-011|quiz.html|O usuário foi capaz de interagir e testar seus conhecimentos na página QUIZ.|ROMÁRIO|


## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o Plano de testes dos requisitos funcionais, no ambiente de produção com início no dia 11 de Dezembro de 2022 e mediante o apresentado, concluímos que a plataforma está APROVADA.
