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
| GABRIEL | Usuário do Save Coin | Saber quanto gasto por mês | Que eu consiga gerir melhor meus gastos e reservas |
| BIANCA | Usuário do Save Coin | Saber se eu consegui entender bem os estudos que a Save Coin disponibiliza sobre finanças | Eu conseguir ter mais segurança ao gerir meu dinheiro |
| PEDRO | Usuário do Save Coin | Conseguir ter acesso a artigos e estudos relacionados ao assunto de forma resumida e eficiente | Eu consiga aprender sobre o assunto e conseguir repassa-lo de forma rápida e prática. |
| GABRIELLY | Usuária do Save Coin | Conseguir acompanhar e editar se preciso a meta que eu estipulei com o auxilio do site | Eu consiga administrar meu dinheiro e me sentir mais motivada a conquistar minha meta |
| ROBERTO | Usuário do Save Coin | Lembrar das contas a pagar e estudar como gerir melhor seu dinheiro | Gostaria que minha saúde financeira e da minha empresa melhore e eu não seja negativado novamente |
| LUDI | Usuária do Save Coin | Entender melhor o que ganho e gasto e entender melhor sobre investimentos | Eu saiba gerir a herança da minha vó, assim, podendo ter um bom futuro. |
| FELIPE | Usuário do Save Coin | Entender sobre o funcionamento do método 50/30/20 | Eu possa administrar os gastos englobados na manutenção de uma casa. |
| LUNA | Usuária do Save Coin | Acompanhar meu progresso em relação à meta final de economia | Eu consiga visualizar o quanto consegui poupar e estimar em quanto tempo terei o suficiente para comprar o ingresso do show. |


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
|RNF-001| O sistema não apresentará ao usuário logado quaisquer dados de cunho privativo de outros usuários | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-004| O sistema deverá seguir normas éticas e morais das leis: Lei Gera l de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018 e Lei Reguladora dos Direitos Autorais Lei nº 9.610/1998 | ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Deverá ter interação com Json Server        |
