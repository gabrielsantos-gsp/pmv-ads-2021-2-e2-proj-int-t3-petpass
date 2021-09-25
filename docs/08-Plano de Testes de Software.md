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
