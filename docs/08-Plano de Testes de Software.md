# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Esta seção aborda o Plano de Testes de Software a ser aplicado neste projeto. Tal plano de testes foi elaborado pelos próprios desenvolvedores da aplicação, que também serão os responsáveis pela execução dos testes no sistema e do registro dos resultados.

## Plano de Testes de Software

Requisitos para realização dos testes:

- _Site_ hospedado na Internet (_Vercel_);
- Navegador de Internet (_Google Chrome, Firefox, Microsoft Edge_);
- Conectividade de Internet para acesso à plataforma.

Os testes funcionais a serem realizados na aplicação interativa são descritos a seguir:

### Caso teste CT-001

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail) se ele for maior de idade.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/registrar);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site e a região de Login;

    5- Clicar no botão 'Criar conta';

    6- Visualizar a página de registrar do site;

    7- Visualizar os compos para preenchimento com os dados do usuário;

    8- Preencher as informações a cada um dos campos e suas exigências;

    9- Clicar no botão de 'Cadastrar';

**Critérios de êxito:**

- O usuário deve conseguir criar uma conta no site;
- O usuário deve conseguir Logar na conta criada no site.

---

### Caso teste CT-002

**Objetivo do teste:**

- Verificar a funcionalidade de login do usuário.

**Requisitos associados:**

RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail) se ele for maior de idade.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site e a região de Login;

    5- Visualizar os campos de Nome e e-mail na área de Login;

    6- Clicar nos campos do Login que aparecem no centro da página;

    7- Preencher os campos com o e-mail e a senha cadastrados no site;

    8- Clicar no botão de Entrar;

**Critérios de êxito:**

- O usuário deve conseguir logar em sua conta;
- O redirecionamento deverá levar o usuário para o DashBoard (Tela principal do site) da aplicação.

---

### Caso teste CT-003

**Objetivo do teste:**

- Verificar a funcionalidade de criar um perfil de pet no site.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrada no site;

    8- Clicar no botão de Entrar;

    9- Clicar na opção ‘CADASTRAR PETS’ no menu à esquerda;

    10- Clicar na opção ‘Cadastre um novo pet’;

    11- Informar os dados do pet: Foto, Nome, Idade, Cachorro/Gato, Raça, Sexo, Peso;

    12- Clicar no botão Cadastrar.

**Critérios de êxito:**

- O usuário deve conseguir criar um perfil de pet no site;

---

### Caso teste CT-004

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos perfis de pet cadastrados em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrada no site;

    8- Clicar no botão de Entrar;

    9- Clicar na opção ‘Meus pets’ no menu à esquerda;

**Critérios de êxito:**

- O usuário deve conseguir observar todos os perfis de pet cadastrados em sua conta;

---

### Caso teste CT-005

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos detalhes do perfil de um pet cadastrado em uma conta.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrada no site;

    8- Clicar no botão de Entrar;

    9- Clicar na opção ‘Meus pets’ no menu à esquerda;

    10- Clicar na opção ‘Ver perfil’ no perfil do pet desejado;

    11- Clicar em ‘Voltar’ para retornar ao menu com o perfil geral de todos os pets cadastrados.

**Critérios de êxito:**

- O usuário deve conseguir observar o perfil detalhado de um pet cadastrado em sua conta;

---

### Caso teste CT-006

**Objetivo do teste:**

- Verificar a funcionalidade de Gerar Relatório do Pet

**Requisitos associados:**

RF-003: O sistema deverá permitir gerar um relatório com as informações de saúde dos animais (dados, vacinas já aplicadas, datas de aplicação, etc.).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site *(https://pet-pass.vercel.app/login)*;

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site e a região de Login;

    5- Informar o Email e Senha cadastrados no site;

    6- Clicar no botão para Entrar;

    7- Visualizar a tela *DashBoard*;

    8- Clicar no botão 'Gerar Relatório' da *side bar*;

    9- Visualizar a tela 'Gerar Relatório'

    10- Selecionar as check box de quais Pets deseja-se emitir o relatório (pode ser de um ou mais Pets);

    11- Clicar e 'Gerar relatório';

    12- Ser redirecionado para a tela de impressão do seu computador, celular ou tablet.

**Critérios de êxito:**

- O usuário deve conseguir gerar uma versão para impressão do relatório;
- O relatório deve conter todas as informações dos Pets selecionados pelo usuário.

---

### Caso teste CT-007

**Objetivo do teste:**

- Verificar a funcionalidade de Excluir o perfil de um Pet associado ao usuário.

**Requisitos associados:**

RF-004: O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site e a região de Login;

    5- Informar o Email e Senha cadastrados no site;

    6- Clicar no botão para Entrar;

    7- Visualizar a tela *DashBoard*;

    8- Clicar no botão 'Meus Pets' da *side bar*;

    9- Visualizar a tela 'Meus Pets'

    10- Selecionar a opção 'Excluir Perfil' no Pet desejado;

    11- Clicar em 'SIM' na tela de confirmação da exclusão;

    12- Visualizar a mensagem de confirmação de exclusão;

**Critérios de êxito:**

- O usuário deve conseguir excluir o perfil do pet cadastrado em sua conta;
- O redirecionamento deverá levar para a Tela Meus Pets da aplicação;
- O perfil do usuário não deve ser excluído juntamente com o perfil do Pet.

---

### Caso teste CT-008

**Objetivo do teste:**

- Verificar a funcionalidade Excluir conta de usuário.

**Requisitos associados:**

RF-005: O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo automaticamente qualquer perfil de pet vinculado somente a ela no momento.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Informar o Email e Senha cadastrada no site;

    6- Clicar no botão para Entrar;

    7- Visualizar a tela DashBoard, clicar no botão referente ao Perfil e selecionar a opção 'Editar Perfil';

    8- Visualizar a tela Editar Perfil e selecionar a opção 'Excluir Perfil';

    9- Clicar em 'Sim' na tela de exclusão;

    10- Visualizar a mensagem de confirmação;

**Critérios de êxito:**

- O usuário deve conseguir excluir a sua conta de usuário e os dos Pets associados;
- O redirecionamento deverá levar para o DashBoard (Tela principal do site) da aplicação.

---

### Caso teste CT-009

**Objetivo do teste:**

- Verificar o funcionamento do sistema nos principais navegadores da Web.

**Requisitos associados:**

RNF-001: O sistema deverá funcionar nos principais navegadores da Web (Google Chrome, Mozila Firefox, Microsoft Edge).

**Passos:**

    1- Acessar o Navegador Google Chrome;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Informar o Email e Senha cadastrada no site;

    6- Clicar no botão para Entrar;

    7 – Assistir ao vídeo demonstrativo;

    8- Executar as principais funcionalidades do sistema: Cadastrar Pet, Cadastrar Vacina, Editar Perfil de Usuário, Excluir Pet, Excluir Perfil de Usuário, Gerar Relatório, etc;

**Critérios de êxito:**

- O sistema responde corretamente em todos os navegadores testados.

---

### Caso teste CT-010

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do usuário.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a homepage do site e a região de Login;

    5- Visualizar os campos de Nome e e-mail na área de Login;

    6- Clicar nos campos do Login que aparecem no centro da página;

    7- Preencher os campos com o e-mail e a senha cadastrados no site;

    8- Clicar no botão de Entrar;

    9- Clicar no ícone redondo no canto superior direito;

    10- Clicar em 'Editar Perfil';

    11-Clicar em 'Editar' nos campos à direita de 'Nome' ou 'Email' ou 'Alterar foto' e fazer as alterações necessárias;

    12- Clicar no botão 'Salvar'.

**Critérios de êxito:**

- O usuário deve conseguir logar em sua conta;
- O usuário deve conseguir acessar o seu perfil com seus dados;
- O usuário deve conseguir salvar as alterações feitas;

---

### Caso teste CT-011

**Objetivo do teste:**

- Verificar a funcionalidade de Editar perfil do pet.

**Requisitos associados:**

RF-006: O sistema deverá permitir a edição das informações do usuário e dos pets cadastrados.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrada no site;

    8- Clicar no botão de Entrar;

    9- Clicar na opção ‘Meus pets’ no menu à esquerda;

    10- Clicar na opção ‘Editar perfil’ no perfil do pet desejado;

    11- Alterar os dados desejados em cada campo específico;

    12-  Clicar em 'Salvar alterações';

    13- Caso deseje cancelar as alterações, clicar em 'Cancelar'.

**Critérios de êxito:**

- O usuário deve conseguir acessar o perfil do pet;
- O usuário deve conseguir salvar as alterações feitas;

---

### Caso teste CT-012

**Objetivo do teste:**

- Verificar se o sistema está responsivo no acesso pelo smartphone.

**Requisitos associados:**

RNF-002: O sistema deverá ser responsivo, permitindo sua utilização em computadores desktops, notebooks, tablets e smartphones.

**Passos:**

    1- Acessar o Navegador web do celular;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar no botão de 'AVANÇAR' no smartphone;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e E-mail;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o e-mail e senha cadastrados no site;

    8- Clicar no botão de Entrar;

    9- Navegar pelo site verificando seu layout e todas as suas funcionalidades.

**Critérios de êxito:**

- O sistema deverá funcionar normalmente na versão mobile.
- Deverá aparecer o "Menu hamburguer" contendo as mesmas informações da _sidebar_ que aparece na versão para desktop e notebook.
- Todas as funcionalidades da aplicação deverão estar operando de forma correta na versão _mobile_.
- As APIs devem estar funcionando corretamente na versão _mobile_.

---

### Caso teste CT-013

**Objetivo do teste:**

- Verificar a funcionalidade de adicionar uma vacina ao perfil do Pet.

**Requisitos associados:**

RF-002: O sistema deverá permitir criar um perfil para o pet, registrando e permitindo a verificação de seus dados básicos (nome, raça, espécie, peso, idade) e de vacinação (tipo de vacina e data de vacinação).

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Visualizar os inputs de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrados no site;

    8- Clicar no botão de Entrar;

    9- Clicar em 'Minhas Vacinas';

    10- Escolher o tipo de aninal;

    11- Escolher a vacina desejada;

    12- Escolher o Pet que tomou a vacina;

    13- Preencher a data de aplicação;

    14- Marcar a dose de aplicação;

    15- Clicar em 'Cadastrar';

**Critérios de êxito:**

- Ao acessar o perfil do Pet, deverá aparecer a vacina adicionada recentemente pelo usuário.
