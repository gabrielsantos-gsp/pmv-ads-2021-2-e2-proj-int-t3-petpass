# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

O processo de realização dos testes da solução desenvolvida está documentado nesta seção, trazendo o plano de testes de software e os registros dos testes realizados.
O plano de testes foi elaborado pelos desenvolvedores da aplicação e a testagem do funcionamento do site também foi realizado pelos mesmos.

## Plano de Testes de Software

Requisitos para realização dos testes:

- _Site_ hospedado na Internet (_Vercel_);
- Navegador de Internet (_Google Chrome, Firefox, Microsoft Edge_);
- Conectividade de Internet para acesso à plataforma.

Os testes funcionais a serem realizados na aplicação _interativa_ são descritos a seguir:

### Caso teste CT-001

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**
RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail) se ele for maior de idade.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/registrar);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de registrar do site;

    5- Visualizar os inputs;

    6- Preencher as informações a cada um dos inputs e suas exigências;

    8- Clicar no botão de Cadastrar;

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

    4- Visualizar a página de Login do site;

    5- Visualizar os input de Nome e Email;

    6- Clicar nos inputs do login que aparecem no centro da página;

    7- Informar o email e senha cadastrada no site;

    8- Clicar no botão de Entrar;

**Critérios de êxito:**

- O usuário deve conseguir logar na sua conta;
- O redirecionamento deverá levar para o DashBoard (Tela principal do site) da aplicação.

---

### Caso teste CT-003

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Requisitos associados:**
RF-001: O sistema deverá permitir a criação de um perfil de usuário para o responsável do pet (associado ao seu e-mail) se ele for maior de idade.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/registrar);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de login do site ;

    5- Localizar texto “Esqueci minha senha";

    6- Clicar em “Esqueci minha senha”;

    7- Inserir e-mail já cadastrado;

    8- Clicar no botão “Confirmar”;

**Critérios de êxito:**

- O usuário deve conseguir recuperar sua senha;
- O usuário deve conseguir Logar no site.

---

### **Caso teste CT-011**

**Objetivo do teste:**

- Verificar a funcionalidade excluir Pet associado ao usuário.

**Requisitos associados:** RF-009: O sistema deverá permitir a exclusão do perfil do pet, sem excluir a conta do responsável.

**Passos:**

    1- Acessar o Navegador;

    2- Informar o endereço do Site (https://pet-pass.vercel.app/login);

    3- Clicar em 'ENTER' no teclado;

    4- Visualizar a página de Login do site;

    5- Informar o Email e Senha cadastrada no site;
    
    6- Clicar no botão para Entrar;

    7- Visualizar a tela DashBoard e clicar no botão Meus Pets;

    8- Visualizar a tela Meus Pets e selecionar a opção Excluir Perfil;

    9- Clicar em 'SIM' na tela de exclusão;

    10- Visualizar a mensagem de confirmação;

**Critérios de êxito:**

- O usuário deve conseguir excluir o perfil do pet cadastrado na sua conta;
- O redirecionamento deverá levar para a Tela Meus Pets da aplicação.

---

### **Caso teste CT-012**

**Objetivo do teste:**

- Verificar a funcionalidade excluir conta de usuário.

**Requisitos associados:** RF-010: O sistema deverá permitir a exclusão da conta de usuário responsável do pet, excluindo automaticamente qualquer perfil de pet vinculado somente a ela no momento.

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

### **Caso teste CT-013**

**Objetivo do teste:**

- Verificar o funcionamento do sistema nos principais navegadores da Web.

**Requisitos associados:** RNF-001: O sistema deverá funcionar nos principais navegadores da Web (Google Chrome, Mozila Firefox, Microsoft Edge).

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
