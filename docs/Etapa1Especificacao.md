# Especificações do Projeto

Pré-leitura: [Documentação de Contexto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2022-2-e1-proj-web-t2-projeto-g3-educacao-financeira/blob/main/docs/Etapa1DocContexto.md)

## Personas
Persona é a representação fictícia do cliente ideal de um negócio. É baseada em dados reais sobre comportamento e características demográficas dos clientes, assim como histórias pessoais, motivações, objetivos, desafios e preocupações.
 
<img src="/docs/img/PERSONAS/PERSONA GABRIELLY - GIOVANNY.png" width="480px">    <img src="/docs/img/PERSONAS/PERSONA PEDRO - GIOVANNY.png" width="480px"></a>
 
<img src="/docs/img/PERSONAS/PERSONA LUNA - AMANDA.png" width="480px">    <img src="/docs/img/PERSONAS/PERSONA FELIPE - AMANDA.png" width="480px"></a>

<img src="/docs/img/PERSONAS/PERSONA TOBIAS - PEDRO.png" width="480px">    <img src="/docs/img/PERSONAS/PERSONA CARMEN - PEDRO.png" width="480px"></a>

<img src="/docs/img/PERSONAS/PERSONA LUDI - GIAN.png" width="480px">    <img src="/docs/img/PERSONAS/PERSONA ROBERTO - GIAN.png" width="480px"></a>

<img src="/docs/img/PERSONAS/PERSONA MARIA - ROMA.png" width="480px"></a>    <img src="/docs/img/PERSONAS/PERSONA JOAO - ROMA.png" width="480px">

<img src="/docs/img/PERSONAS/PERSONA GABRIEL - DIOVANA.png" width="480px"></a>    <img src="/docs/img/PERSONAS/PERSONA BIANCA - DIOVANA.png" width="480px">

## Histórias de Usuários
A história do usuário é uma explicação informal e geral sobre um recurso de software escrita a partir da perspectiva do usuário final ou cliente. Dessa forma, com base na análise das personas supracitadas foram identificadas as seguintes histórias de usuários:

|PERSONA | COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------|------------------------------------|----------------------------------------|
| GABRIEL | Usuário do Save Coin | Saber quanto gasto por mês | Que eu consiga gerir melhor meus gastos e reservas |
| BIANCA | Usuário do Save Coin | Saber se eu consegui entender bem os estudos que a Save Coin disponibiliza sobre finanças | Eu conseguir ter mais segurança ao gerir meu dinheiro |
| PEDRO | Usuário do Save Coin | Conseguir ter acesso a artigos e estudos relacionados ao assunto de forma resumida e eficiente | Eu consiga aprender sobre o assunto e conseguir repassa-lo de forma rápida e prática. |
| GABRIELLY | Usuária do Save Coin | Conseguir acompanhar e editar se preciso a meta que eu estipulei com o auxilio do site | Eu consiga administrar meu dinheiro e me sentir mais motivada a conquistar minha meta |
| ROBERTO | Usuário do Save Coin | Lembrar das contas a pagar e estudar como gerir melhor seu dinheiro | Gostaria que minha saúde financeira e da minha empresa melhore e eu não seja negativado novamente |
| LUDI | Usuária do Save Coin | Entender melhor o que ganho e gasto e entender melhor sobre investimentos | Eu saiba gerir a herança da minha vó, assim, podendo ter um bom futuro |
| FELIPE | Usuário do Save Coin | Entender sobre o funcionamento do método 50/30/20 | Eu possa administrar os gastos englobados na manutenção de uma casa |
| LUNA | Usuária do Save Coin | Acompanhar meu progresso em relação à meta final de economia | Eu consiga visualizar o quanto consegui poupar e estimar em quanto tempo terei o suficiente para comprar o ingresso do show |
| JOÃO | Usuário do Save Coin | Aprender boas práticas de gestão financeira | Poder gerir de forma consciente e eficiente minhas finanças |
| JOÃO | Usuário do Save Coin | Acompanhar a evoluação de meus aportes mensais para a concretização de um objetivo | Visualizar o avanço dos recursos poupados em prol da meta estabelecida |
| MARIA | Usuária do Save Coin | Utilizar a ferramenta agenda para inserção de marcos e compromissos financeiros | Ser notificada dos eventos financeiros e acompanhar todas a datas a fim de gerir dentro dos prazos suas finanças |
| MARIA | Usuária do Save Coin | Acessar o conteúdo de forma otimizada para deficientes visuais | Conseguir absorver todo o conteúdo disponível e se valer todas as ferramentas de gestão financeira oferecidas pela plataforma |
| MARIA | Usuária do Save Coin | Acessar o conteúdo a partir de um dispositivo móvel | Consegui utilizar a plataforma em qualquer local ou momento do dia|
| TOBIAS | Usuário do Save Coin | Acompanhar os meus registros de gastos mensalmente | Eu consiga poupar uma parte do meu salário e consiga juntar dinheiro para viajar |
| CARMEN | Usuária do Save Coin | Uma ferramenta de acessibilidade que leia a tela do conteúdo didático sobre educação financeira | Eu possa aprender o conteúdo sobre educação financeira disponibilizado |

## Requisitos
As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais
Os requisitos funcionais representam o que o software faz, em termos de tarefas e serviços.

|       ID      | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deverá realizar o cálculo da receita menos (-) os gastos, exibindo o saldo final (positivo ou negativo) | ALTA |  |
|RF-002| A aplicação deverá exibir os dados de gastos e receitas ao longo dos 12 meses de um ano por meio de gráficos | ALTA |  |
|RF-003| A aplicação permitirá que o usuário faça a gestão de um lembrete de compromissos/marco financeiros | ALTA | GIANLUCA |
|RF-004| A aplicação permitirá que o usuário faça a gestão de um valor significando a sua receita mensal na calculadora de gastos | ALTA | PEDRO |
|RF-005| A aplicação permitirá que o usuário faça a gestão de um valor significando o seu gasto mensal na calculadora de gastos | ALTA | GIOVANNY |
|RF-006| A aplicação permitirá que o usuário faça a gestão de uma meta financeira a ser atingida | ALTA | ROMÁRIO |
|RF-007| A aplicação contará com um "Quiz" sobre o conteúdo didático disponibilizado, ao final da página, e o usuário poderá responder ou não | MÉDIA | ROMÁRIO |
|RF-008| A aplicação deverá exibir um feedback visual quando o usuário acessar a plataforma "X" dias antes da data do seu lembrete | MÉDIA | GIANLUCA |
|RF-009| A aplicação solicitará o cadastramento de dados para a elaboração de perfis sócio/culturais dos usuários | MÉDIA |  |
|RF-010| A aplicação permitirá que o usuario faça a gestão do seu perfil na aplicação | BAIXA |  |

### Requisitos não Funcionais
Os requisitos não-funcionais são os requisitos relacionados ao uso da aplicação em termos de desempenho, usabilidade, confiabilidade, segurança e tecnologias envolvidas.
|      ID     | Descrição do Requisito  | Prioridade |
|:-------:|-------------------------|----|
|RNF-001| A Plataforma Save Coin não permitirá ao usuário logado o acesso ou visualização de quaisquer dados de outros usuários (Ético) | ALTA |
|RNF-002| A Plataforma Save Coin deverá estar disponível em 90% do tempo para acesso aos usuários (Confiabilidade) | MÉDIA |
|RNF-003| A Plataforma Save Coin deverá dispor de ferramentas de acessibilidade a fim de garantir o acesso aos usuários com necessidades especiais (Usabilidade) | ALTA |
|RNF-004| A Plataforma Save Coin deverá desenvolvida em HTML, CSS e JavaScript (Implementação) | ALTA |
|RNF-005| A Platarorma Save Coin deverá apresentar interface responsiva para rodar em um dispositivos móvel (Portabilidade)| MÉDIA | 
|RNF-006| A Plataforma Save Coin deverá ser compatível com os principais browsers (Portabilidade)| MÉDIA |
|RNF-007| A Plataforma Save Coin deverá seguir normas éticas e morais das leis: Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018 e Lei Reguladora dos Direitos Autorais Lei nº 9.610/1998, sendo respeitadas integralmente (Legal) | MÉDIA | 
|RNF-008| A Plataforma Save Coin deverá processar requisições do usuário em no máximo 5s (Eficiência) | MÉDIA | 

## Restrições
As restrições de um projeto são fatores limitantes que podem interromper ou comprometer determinada tarefa. Assim, o projeto estará restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O Projeto (Plataforma Save Coin) deverá ser entregue até o final do semestre|
|02| A Plataforma Save Coin disponibilizará somente conteúdos relacionados a educação financeira|
|03| A Plataforma Save Coin deverá ser desenvolvida somente com a colaboração dos seis membros da equipe|
|04| A Plataforma Save Coin não exibirá propagandas ou anúncios|
