# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

**Caso teste CT-001**

**Objetivo do teste:**

- Verificar a funcionalidade de criar uma conta no site.

**Resultado do teste:**

A aplicação atendeu ao objetivo do teste;

Foi verificada a possibilidade de cadastrar a conta do usuário no site.

![Tela Criar Usuario](img/ct001.png)

Figura 01 – Print da página Criar Usuário

**Caso teste CT-002**

**Objetivo do teste:**

- Verificar a funcionalidade de login do usuário.

**Resultado do teste:**

Foi possível verificar que o usuário conseguiu logar normalmente em sua conta.

![Tela Usuario Login](img/ct002.png)

Figura 02 – Print da página Usuário Login

**Caso teste CT-003**

**Objetivo do teste:**

- Verificar a funcionalidade de recuperação de senha do usuário.

**Resultado do teste:**

Funcionalidade ainda não implantada no sistema.

**Caso teste CT-004**

**Objetivo do teste:**

- Verificar a funcionalidade de criar um perfil de pet no site.

**Resultado do teste:**

Foi verificado que por meio do botão "Pets" o usuário consegue cadastrar um perfil de pet contendo várias informações do animal, dentre elas: Nome, raça, idade, data de nascimento e peso.

![Tela Criar Pet](img/ct004.png)

Figura 03 – Print da página Criar Pet

**Caso teste CT-005**

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos perfis de pet cadastrados em uma conta.

**Resultado do teste:**

Atendeu parcialmente o requisito.

Foi verificado que por meio do botão "Pets" o usuário consegue vizualizar não somente os perfis de pets cadastrados em uma conta mas sim todos os perfis de pet cadastrados no site.

![Tela Ver Pets](img/ct005.png)

Figura 04 – Print da página Ver Pets

**Caso teste CT-006**

**Objetivo do teste:**

- Verificar a funcionalidade de visualização dos detalhes do perfil de um Pet cadastrado em uma conta.

**Resultado do teste:**

Atendeu corretamente ao que era esperado.

O usuário consegue visualizar o perfil detalhado de um Pet cadastrado em sua conta;

![Tela Detalhes](img/Detalhes_PetPass.PNG)

Figura 05 – Print da página Detalhes

**Caso teste CT-007**

**Objetivo do teste:**

- Verificar a funcionalidade de Gerar Relatório do Pet

**Resultado do teste:**

Atendeu parcialmente ao que era esperado.

O relatório apresenta todas as informações do Pet selecionado porém ainda é necessário implantar a opção de impressão.

![Tela Relatorio](img/Relatorio_PetPass.PNG)

Figura 06 – Print da página Dados do Pet (Relatório)

**Caso teste CT-008**

**Objetivo do teste:**

- Verificar a funcionalidade de Transferência do perfil do Pet

**Resultado do teste:**

Funcionalidade ainda não implantada no sistema.

**Caso teste CT-009**

**Objetivo do teste:**

- Verificar a funcionalidade de Excluir o perfil de um Pet associado ao usuário.

**Resultado do teste:**

Atendeu parcialmente ao que era esperado.

O usuário consegue excluir o perfil de qualquer Pet cadastrado no sistema.

Após a exclusão o sistema direciona o usuário para a Tela Pets atualizada.

Não há alteração no perfil do usuário após a exclusão.

![Tela Excluir Pet](img/ExcluirPet_PetPass.PNG)

Figura 07 – Print da página de Excluir Pet (Parte 1)

![Tela Excluir Pet2](img/ExcluirPet2_PetPass.PNG)

Figura 08 – Print da página de Excluir Pet (Parte 2)

**Caso teste CT-010**

**Objetivo do teste:**

- Verificar a funcionalidade Excluir conta de usuário.

**Resultado do teste:**

Atendeu parcialmente ao que era esperado.

O usuário consegue excluir qualquer perfil cadastrado no sistema.

Após a exclusão o sistema direciona o usuário para a Tela atualizada.

Não houve alteração na Tela de Pets (ainda não existe vínculo Usuário-Pets) e o usuário permanece logado no sistema mesmo com a exclusão da conta.

![Tela Excluir Usuario](img/ExcluirUsuario_PetPass.PNG)

Figura 09 – Print da página de Excluir Usuário (Parte 1)

![Tela Excluir Usuario2](img/ExcluirUsuario2_PetPass.PNG)

Figura 10 – Print da página de Excluir Usuário (Parte 2)
