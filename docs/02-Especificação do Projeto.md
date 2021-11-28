# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição do problema e os pontos mais relevantes a serem tratados no escopo deste projeto foram consolidados na forma de personas e histórias de usuários, para melhor entendimento das necessidades do cliente e de seu público alvo.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas abaixo.

### Priscila Amaral

- **Idade:** 32 anos
- **Ocupação:** Dona de um abrigo de animais
- **Motivação:** Encontrar um lar para animais abandonados.
- **História:** Desde pequena, Priscila sempre teve animais de estimação. Daí veio sua inspiração para se tornar uma médica veterinária pois, diante do seu amor pelos bichinhos, passou a dedicar sua vida a cuidar deles. Fundou um abrigo para acolher animais abandonados, ou em situação de rua, e incentiva a adoção dos mesmos.
- **Necessidade:** Um de seus desejos é ter um meio mais prático para registrar as informações importantes sobre a vacinação dos animais que se encontram em seu abrigo, já que são muitos.

![Priscila Amaral](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-pass/blob/main/docs/img/Persona_Priscila%20Amaral.jpg?raw=true)

### Elena Lima

- **Idade:** 40 anos
- **Ocupação:** Advogada e Empresária
- **Motivação:** Com seu hotelzinho de animais, visa prestar o melhor serviço a eles e garantir a satisfação dos donos.
- **História:** Após se formar como advogada, Elena resolveu investir em um setor que está em crescimento, o de hotel de animais. Desde sempre amou seus diversos pets e quis conciliar essa característica com a vontade de crescer financeiramente.
- **Necessidade:** Conhecer os registros de vacinas dos animais antes de hospedá-los em seu hotel.

![Elena Lima](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-pass/blob/main/docs/img/Persona_Elena%20Lima.jpg?raw=true)

### Fernanda Amorim

- **Idade:** 33 anos
- **Ocupação:** Analista Contábil em uma empresa multinacional
- **Motivação:** Cuidar bem dos seus pets para proporcionar a eles uma boa qualidade de vida.
- **História:** Desde a infância Sempre gostou da companhia de animais e agora resolveu adotar um cachorro e um gato de rua.
- **Necessidade:** Gostaria de ter um local onde possa armazenar as informações referente as vacinas que já foram aplicadas em cada um dos seus pets (nome da vacina, data de aplicação, etc.).

![Fernanda Amorim](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-pass/blob/main/docs/img/Persona_Fernanda%20Amorim.jpg?raw=true)

### Carlos Silva

- **Idade:** 70 anos
- **Ocupação:** Professor aposentado
- **Motivação:** Ter um modo mais fácil de registrar os dados de vacinação de seu cachorro e de seu gato.
- **História:** Desde pequeno Carlos teve animais diversos. Quando se aposentou, aos 65 anos, resolveu adotar um gato e um cachorro para sua companhia. Hoje em dia vive com esses animais e tem a intenção de mantê-los saudáveis e com cronogramas vacinais em dia.
- **Necessidade:** Como sempre perde os cartões de vacinação de seus animais, Carlos deseja um local onde possa guardar e acessar os dados vacinais de seus animais de maneira fácil, prática e intuitiva.

![Carlos Silva](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-pass/blob/main/docs/img/Persona_Carlos%20Silva.jpg?raw=true)

### Jorge Lima

- **Idade:** 42 anos
- **Ocupação:** Assistente de clínica veterinária
- **Motivação:** Ter um ambiente digital para registrar os dados dos pacientes e seus cadastros de vacinação e medicamentos.
- **História:** Desde pequeno Jorge conviveu com os animais, pois seu pai é dono de uma clínica veterinária. Atualmente, Jorge é estudante de medicina veterinária e trabalha como assistente de seu pai na clínica de sua família.
- **Necessidade:** Jorge está trabalhando para modernizar os processos burocráticos da clínica e viu a oportunidade de digitalizar o primeiro cadastro dos pacientes. Dessa forma os dados dos animais estariam disponíveis também na forma digital, bem como seu cronograma de vacinação.

![Jorge Lima](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-pass/blob/main/docs/img/Persona_Jorge%20Lima.jpg?raw=true)

## Histórias de Usuários

A partir da compreensão do cotidiano das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                                           | PARA ... `MOTIVO/VALOR`                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priscila Amaral      | registrar informações básicas dos animais (dados)                                                            | facilitar o controle para adoção.                                                                                                                                                     |
| Priscila Amaral      | controlar de forma mais prática a vacinação                                                                  | manter atualizadas as vacinas que já foram dadas.                                                                                                                                     |
| Elena Lima           | consultar os dados de vacinação dos animais                                                                  | aceitar hospedá-los no meu hotel com maior segurança.                                                                                                                                 |
| Fernanda Amorim      | encontrar uma solução para programar as datas de aplicação das vacinas dos meus pets                         | não pôr em risco a saúde dos meus animais.                                                                                                                                            |
| Fernanda Amorim      | encontrar uma solução digital que me permita ter o controle de quais vacinas já foram aplicados em meus pets | não precisar depender apenas da carteira física de vacinação.                                                                                                                         |
| Carlos Silva         | encontrar uma aplicação onde seja fácil registrar informações básicas de vacinação dos animais               | tornar mais fácil o controle das vacinas, pois tenho dificuldade em lembrar onde guardei os cartões de vacinação e também não tenho muita familiaridade em acessar _sites_ complexos. |
| Jorge Lima           | encontrar uma aplicação onde eu possa fazer o registro dos animais (pacientes) que vêm à minha clínica       | tornar mais fácil o controle das vacinas, mantendo também no formato digital os registros dos pacientes.                                                                              |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela abaixo apresenta os requisitos funcionais do projeto, identificando a prioridade em que os mesmos devem ser entregues.

| ID     | Descrição do Requisito                                                                                                                                                                                     | Prioridade |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RF-001 | O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail) se ele for maior de idade.                                                                 | ALTA       |
| RF-002 | O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação). | ALTA       |

| RF-003 | O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados, vacinas já aplicadas, datas de aplicação, etc.).
| MÉDIA |

| RF-004 | O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável. | ALTA |
| RF-005 | O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo, automaticamente, qualquer perfil de pet vinculado somente a ela. | ALTA |
| RF-006 | O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados. | ALTA |

### Requisitos não Funcionais

A tabela abaixo apresenta os requisitos não funcionais que o projeto deverá atender.

| ID      | Descrição do Requisito                                                                                                                                                                     | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| RNF-001 | O sistema deverá funcionar nos principais navegadores da web (Google Chrome, Mozila Firefox, Microsoft Edge)                                                                               | ALTA       |
| RNF-002 | O sistema deverá ser responsivo, permitindo sua utilização em computadores desktops, notebooks, tablets e smartphones                                                                      | ALTA       |
| RNF-003 | A aplicação deverá ser publicada no Git Hub e ser hospedada em plataforma que permita a hospedagem em nuvem (Git Hub Pages, Heroku, etc.), permitindo o acesso dos usuários à página web   | ALTA       |
| RNF-004 | A segurança no armazenamento e na manipulação dos dados do dono e do pet deve seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD)                                                | ALTA       |
| RNF-005 | O sistema deverá ser intuitivo e de fácil utilização, para atender também ao público idoso                                                                                                 | ALTA       |
| RNF-006 | O sistema deverá estar disponível para acesso 24h por dia, exceto quando em manutenção                                                                                                     | MÉDIA      |
| RNF-007 | O sistema deverá disponibilizar as informações cadastrais do responsável e do pet apenas para o usuário responsável pela conta e para a equipe de desenvolvimento e manutenção do software | ALTA       |

## Restrições

As questões que limitam a execução deste projeto e que se configuram como obrigações claras para seu desenvolvimento são apresentadas na tabela abaixo.

| ID     | Restrição                                                                                                  |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| RE-001 | O sistema deverá ser entregue pronto e funcional ao final do semestre letivo.                              |
| RE-002 | O sistema deverá ser uma aplicação interativa, apresentando estrutura de programação web front e back-end. |
| RE-003 | O sistema deverá ter sua programação back-end feita nas linguagens C# e Asp.Net.                           |
| RE-004 | O sistema deverá permitir apenas o cadastro de cães e gatos num primeiro momento.                          |
| RE-005 | O sistema deverá ser elaborado pelos próprios alunos, não podendo subcontratar o serviço de terceiros.     |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o primeiro esboço da aplicação a ser desenvolvida, feito após a etapa elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos.

A seguir, é representado o Diagrama de Casos de Uso do sistema Pet Pass (carteira de vacinação digital para pets):

![Diagrama de Casos de Uso_REVISADO](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Diagrama%20de%20Caso%20de%20Uso_REVISADO.png?raw=true)
