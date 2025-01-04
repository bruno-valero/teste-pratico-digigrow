# Teste Prático da Digigrow

Este é um teste prático proposto pela **Digigrow**. O teste prático consiste na criação de uma aplicação com duas partes: **back-end** e **front-end**.

- ### Back-end:

    No **back-end**, é necessário desenvolver uma **API REST** utilizando **Node.js**, com funcionalidades para **adicionar**, **listar**, **editar** e **excluir** tarefas. A API deverá usar o banco de dados **MongoDB** para armazenar as tarefas e implementar validações simples, como garantir que o campo "**title**" seja obrigatório e que a descrição não ultrapasse **255 caracteres**.

    Para ver mais detalhes sobre a API, consulte o arquivo **[README.md da sessão de back-end](back-end.md)**.

- ### Front-end:

    No **front-end**, deve ser criada uma interface em **React.js** que permita ao usuário interagir com a API. A interface deve permitir **listar**, **adicionar**, **editar** e **excluir** tarefas de forma intuitiva. Embora não seja um requisito, um **design responsivo** será considerado um diferencial.

    Para ver mais detalhes sobre o front-end, consulte o arquivo **[README.md da sessão de front-end](front-end.md)**.

## Sobre o Monorepo

Como o desafio proposto é a criação de um projeto com duas partes, **back-end** e **front-end**, decidi utilizar o **Monorepo** para organizar os projetos. O **Monorepo** consoste em organizar vários projetos dentro de uma única estrutura de diretórios. Isso permite que os projetos sejam mantidos e gerenciados de forma mais eficiente, além de facilitar a comunicação e a integração entre os projetos. Para faciçitar a configuração, eu estou utilizando uma solução da [**Versel**](https://vercel.com) chamada **[Turborepo](https://turbo.build)**.

Para entender melhor o **Monorepo**, recomendo a leitura do artigo "[Monorepo: como usá-lo para desenvolver e integrar grandes projetos](https://www.alura.com.br/artigos/monorepo-usa-lo-desenvolver-integrar-grandes-projetos)". 

## Começando

### Instalação

```bash
npm install
```

### Rodando os testes

```bash
npm run test
```

### Rodando o linter

```bash
npm run lint
```

### Rodando a checagem de tipos

```bash
npm run types
```