# Programação de Funcionalidades

Nesta seção estão descritos os artefatos e estruturas de dados criados para atender aos requisitos previstos nas <a href="docs/Etapa1Especificacao.md">Especificações do Projeto</a>, bem como as instruções para acesso e verificação da implementação. As tecnologias utilizadas se baseiam nas linguagens HTML, CSS e JavaScript.

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

## Meta Financeira

## Requisitos

### RF-008: A aplicação permitirá que o usuário realize a gestão de suas metas na funcionalidade Meta Financeira

Para atender aos requisitos RF-008 foi desenvolvida a página Meta Financeira, `metaFinanceira.html`.

Ao acessar a página Meta Financeira, será exibido um botão para o usuário adicionar novas metas e serão carregadas as metas já cadastradas pelo usuário, caso ele já tenha alguma cadastrada. Havendo metas cadastradas, o usuário tem como possibilidade, através de botões, a exclusão da meta, adicionar uma nova entrada financeira/depósito e editar a meta.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Meta%20Financeira.png" width="1020px">

Ao clicar no "X" vermelho para excluir a meta, um modal é aberto para confirmar se o usuário realmente quer excluí-la.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/excluir%20meta.png" width="1020px">

Clicando no botão "Nova Entrada", um modal com um formulário é aberto para que o usuário possa inserir a quantia de depósito na meta selecionada.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/nova%20entrada%20meta.png" width="1020px">

Clicando no botão "Editar", um modal com um formulário é aberto para que o usuário possa editar os dados da meta selecionada.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/salvar%20editar%20meta.png" width="1020px">

Clicando no botão "Adicionar nova meta", um modal com um formulário é aberto para que o usuário possa inserir os dados da nova meta.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/salvar%20editar%20meta.png" width="1020px">

## Material Didático

## Requisito

### RF-010: A aplicação apresentará uma seção com matérias destinadas à educação financeira na funcionalidade MATERIAL DE DIDÁTICO.

Para atender ao requisito RF-010 foi desenvolvida a página MATERIAL DIDÁTICO, `hArticle.html`.

Ao acessar a página MATERIAL DIDÁTICO, serão exibidos diversos "cards" que representam os artigos disponíveis para leitura dos usuários. Cada "card" contém uma ilustração, um título, um texto resumo e um botão.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/HMD.png" width="1020px">

Clicando no botão 'Aprenda', o usuário será direcionado à página, `articleXX.html` que contém o artigo na íntegra para leitura e aprendizado.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/A01.png" width="1020px">

## Quiz

## Requisito

### RF-011: A aplicação permitirá que o usuário realize a avaliação de seus conhecimentos sobre educação financeira na funcionalidade QUIZ.

Para atender ao requisito RF-011 foi desenvolvida a página QUIZ, `quiz.html`.

Ao acessar a página QUIZ, será exibido um jogo interativo de perguntas e respostas sobre conhecimentos em educação financeira baseado nos artigos disponíveis na aba MATERIAL DIDÁTICO. O quiz é composto de seis perguntas, contendo três opções de resposta e apenas uma correta. O quiz conta com um marcador de pontos, uma barra de progresso, destaque visual para opção de resposta a ser selecionada, resposta visual nas cores verde ou vermelho conforme acerto ou erro da questão, notificação sonora conforme acerto ou erro da questão e uma notificação sonora de vitória para pontuações altas.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 01.png" width="1020px">

Ao passar o mouse sobre uma alternativa, esta receberá um destaque visual.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 02.png" width="1020px">

Ao escolher uma alternativa, será acionado um destaque visual, verde para acerto, e uma notificação sonora.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 03.png" width="1020px">

Ao escolher uma alternativa, será acionado um destaque visual, vermelho para erro, e uma notificação sonora.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 04.png" width="1020px">

Em seguida será exibida uma nova pergunta.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 05.png" width="1020px">

Os processos anteriores são repetidos, até o final das perguntas.
Ao fim do quiz, será exibida uma tela com a informação "Fim de Jogo!", a pontuação final do jogador, e uma notificação sonora de aplausos para pontuações altas.

<img src="/docs/img/PROGRAMAÇÃO%20DE%20FUNCIONALIDADES/Quiz 06.png" width="1020px">

