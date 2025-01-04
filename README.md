# Teste Prático da Digigrow

Este é um teste prático proposto pela **Digigrow**. O teste prático consiste na criação de uma aplicação com duas partes: **back-end** e **front-end**.

- ### Back-end:

    No **back-end**, é necessário desenvolver uma **API REST** utilizando **Node.js**, com funcionalidades para **adicionar**, **listar**, **editar** e **excluir** tarefas. A API deverá usar o banco de dados **MongoDB** para armazenar as tarefas e implementar validações simples, como garantir que o campo "**title**" seja obrigatório e que a descrição não ultrapasse **255 caracteres**.

    Para ver mais detalhes sobre a API, veja um dos módulos deste monorepo chamado **[infra](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/infra)**.

- ### Front-end:

    No **front-end**, deve ser criada uma interface em **React.js** que permita ao usuário interagir com a API. A interface deve permitir **listar**, **adicionar**, **editar** e **excluir** tarefas de forma intuitiva. Embora não seja um requisito, um **design responsivo** será considerado um diferencial.

    Para ver mais detalhes sobre o front-end, veja um dos módulos deste monorepo chamado **[front-end](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/frontend)**.

## Sobre o Monorepo

Como o desafio proposto é a criação de um projeto com duas partes, **back-end** e **front-end**, decidi utilizar o **Monorepo** para organizar os projetos. O **Monorepo** consiste em organizar vários projetos dentro de uma única estrutura de diretórios. Isso permite que os projetos sejam mantidos e gerenciados de forma mais eficiente, além de facilitar a comunicação e a integração entre os projetos. Para faciçitar a configuração, eu estou utilizando uma solução da [**Versel**](https://vercel.com) chamada **[Turborepo](https://turbo.build)**.

Para entender melhor o **Monorepo**, recomendo a leitura do artigo "[Monorepo: como usá-lo para desenvolver e integrar grandes projetos](https://www.alura.com.br/artigos/monorepo-usa-lo-desenvolver-integrar-grandes-projetos)". 

## Começando

### Instalação

```bash
npm install
```

---

### Rodando o linter

```bash
npm run lint
```

---

### Rodando a checagem de tipos

```bash
npm run types
```

---

### Variáveis de ambiente

Para realizar os passos a seguir, é necessário ter as seguintes variáveis de ambiente definidas no módulo de infra:

- Crie um arquivo `.env` na [raiz do módulo de infra](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/infra) e adicione as variáveis de ambiente. Para saber quais são as variáveis de ambiente necessárias, consulte o arquivo [`.env.example`](https://github.com/bruno-valero/teste-pratico-digigrow/blob/main/apps/infra/.env.example).

---

### Rodando os testes

Há dois tipos de testes: os **unitários** e os **end-to-end**. O **unitários** são os testes que são executados na camada de domínios da aplicação, enquanto os **end-to-end** são os testes que são executados na camada de infraestrutura da aplicação.

#### **Rodando os testes unitários**

```bash
npm run test
```
#### **Rodando os testes end-to-end**

```bash
npm run test-e2e
```

---

### Rodando em desenvolvimento

Serão duas aplicações que irão rodar simultaneamente.

```bash
npm run dev
```

- Para acessar a aplicação de infraestrutura (back-end), acesse [http://localhost:3333](http://localhost:3333) e consulte a documentação da API feita com **Swagger** em [http://localhost:3333/docs](http://localhost:3333/docs).
- Para acessar a aplicação de front-end, acesse [http://localhost:3000](http://localhost:3000).

---