# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|PERSONA | COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------|------------------------------------|----------------------------------------|
| GABRIEL | Usuário da Save Coin | saber quanto gasto por mês | que eu consiga gerir melhor meus gastos e reservas |
| BIANCA | Usuário da Save Coin | saber se eu consegui entender bem os estudos que a Save Coin disponibiliza sobre finanças | eu conseguir ter mais segurança ao gerir meu dinheiro |
| PEDRO | Usuário da Save Coin | Conseguir ter acesso a artigos e estudos relacionados ao assunto de forma resumida e eficiente | Eu consiga aprender sobre o assunto e conseguir repassa-lo de forma rápida e prática. |
| GABRIELLY | Usuária da Save Coin | Conseguir acompanhar e editar se preciso a meta que eu estipulei com o auxilio do site | Eu consiga administrar meu dinheiro e me sentir mais motivada a conquistar minha meta |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário insira um lembrete de compromissos/marco financeiros | ALTA |  |
|RF-002| Permitir que o usuário edite um lembrete de compromissos/marco financeiros | BAIXA | |
|RF-003| Permitir que o usuário exclua um lembrete de compromissos/marco financeiros | MÉDIA |  |
|RF-004| Permitir que o usuário visualize um lembrete de compromissos/marco financeiros dentro de uma agenda | ALTA |  |
|RF-005| A aplicação devera emitir um feedback visual quando o usuário entrar na plataforma x dias antes da data do seu lembrete | ALTA |  |
|RF-006| A aplicação contará com um QUIZ sobre o conteúdo exibido, ao final da página, o usuário poderá responder ou não | MÉDIA |  |
|RF-007| Permitir que o usuário insira um valor significando a sua receita mensal na calculadora de gastos | ALTA |  |
|RF-008| Permitir que o usuário exclua um valor significando a sua receita mensal na calculadora de gastos | MÉDIA |  |
|RF-009| Permitir que o usuário edite um valor significando a sua receita mensal na calculadora de gastos | BAIXA |  |
|RF-010| Permitir que o usuário visualize um valor significando a sua receita mensal na calculadora de gastos | ALTA |  |
|RF-011| Permitir que o usuário insira um valor significando o seu gasto mensal na calculadora de gastos | ALTA |  |
|RF-012| Permitir que o usuário exclua um valor significando o seu gasto mensal na calculadora de gastos | MÉDIA |  |
|RF-013| Permitir que o usuário edite um valor significando o seu gasto mensal na calculadora de gastos | BAIXA |  |
|RF-014| Permitir que o usuário visualize um valor significando o seu gasto mensal na calculadora de gastos | ALTA |  |
|RF-015| A aplicação devera fazer uma conta da receita menos (-) os gastos, mostrando o valor que está 'sobrando', quando existir gastos e receita juntos | ALTA |  |
|RF-016| A aplicação devera mostrar os dados de gastos e/ou receitas ao longo dos 12 meses de um ano por meio de graficos | ALTA |  |
|RF-017| Permitir que o usuario insira seu perfil na aplicação | ALTA |  |
|RF-018| Permitir que o usuario vizualize e acompanhe seu perfil | ALTA |  |
|RF-019| Permitir que o usário edite seu perfil | BAIXA |  |
|RF-020| Permitir que o usuário exclua seu perfi | MÉDIA |  |
|RF-021| Permitir que o usuário insira uma meta financeira a ser atingida | ALTA |  |
|RF-022| Permitir que o usuário visualize uma meta financeira a ser atingida | ALTA |  |
|RF-023| Permitir que o usuário edite uma meta financeira a ser atingida | BAIXA |  |
|RF-024| Permitir que o usuário exclua uma meta financeira a ser atingida | MÉDIA |  |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema não apresentará ao usuário logado quaisquer dados de cunho privativo de outros usuários | ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
