# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

A seguir, é mostrado o Diagrama de Classes da aplicação Pet Pass:

![Diagrama de Classes](img/Diagrama%20de%20Classes.PNG)

## Modelo ER

O Modelo Entidade-Relacionamento (MER) representa, através de um diagrama, como as entidades (coisas/objetos) se relacionam entre si na aplicação interativa.

A seguir, é mostrado o MER da aplicação Pet Pass:

![Diagrama_E-R](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Diagrama%20E-R.PNG?raw=true)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados do Modelo ER em tabelas, juntamente com as restrições de integridade e chave primária (destacada em negrito) e chave estrangeira (apenas sublinhada).

A seguir, é mostrado o Esquema relacional da aplicação Pet Pass:

![Esquema_Relacional](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass/blob/main/docs/img/Esquema%20Relacional.PNG?raw=true)

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

## User Flow

Em complemento ao Diagrama de Fluxo, é destacado abaixo o *User Flow*, que apresenta a mesma ideia do diagrama anterior. Contudo, fornece uma visualização mais realista da interface pensada para a aplicação, utilizando para isso a concepção dos *Wireframes*.

![User_Flow](img/Diagrama.png)

O usuário acessa o endereço *web* onde a aplicação está hospedada e então tem acesso à homepage do sistema. Nesta etapa, ele poderá fazer login em sua conta, caso já esteja cadastrado, ou criar uma nova conta de usuário, login e senha; podendo também recuperar a conta caso tenha esquecido a senha. Após o login, ao entrar de fato no sistema, o usuário é direcionado para a área do Dashboad, onde poderá assistir ao vídeo demonstrativo acerca do funcionamento da aplicação. Em seguida, ele poderá adicionar um perfil de Pet a sua conta, fornecendo todas as informações solicitadas acerca do Pet. Criado o perfil desse Pet, o usuário poderá associar a ele as vacinas que já foram aplicadas, escolhendo o tipo de vacina e informando a dose e a data de aplicação. Concluído o perfil do Pet, o usuário terá a opção, através da tela principal "Meus Pets", de visualizar o perfil do Pet criado (de forma detalhada), excluir o perfil desse Pet, ou tranferir o perfil desse Pet para outro usuário cadastrado no sistema. Na *sidebar* da aplicação, o usuário ainda encontra a opção de gerar um relatório das condições de vacinação dos Pets selecionados e um local de informações a respeitos de todas as vacinas que podem ser aplicadas nos pets, por espécie.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
