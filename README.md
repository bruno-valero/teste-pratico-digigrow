# Teste Prático da Digigrow

Este é um teste prático proposto pela **Digigrow**. O teste prático consiste na criação de uma aplicação com duas partes: **back-end** e **front-end**.

- ### Back-end:

    No **back-end**, é necessário desenvolver uma **API REST** utilizando **Node.js**, com funcionalidades para **adicionar**, **listar**, **editar** e **excluir** tarefas. A API deverá usar o banco de dados **MongoDB** para armazenar as tarefas e implementar validações simples, como garantir que o campo "**title**" seja obrigatório e que a descrição não ultrapasse **255 caracteres**.

    Para ver mais detalhes sobre a API, veja um dos módulos deste monorepo chamado **[infra](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/infra)**.

- ### Front-end:

    No **front-end**, deve ser criada uma interface em **React.js** que permita ao usuário interagir com a API. A interface deve permitir **listar**, **adicionar**, **editar** e **excluir** tarefas de forma intuitiva. Embora não seja um requisito, um **design responsivo** será considerado um diferencial.

    Para ver mais detalhes sobre o front-end, veja um dos módulos deste monorepo chamado **[front-end](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/frontend)**.

## Sobre o Monorepo

Como o desafio proposto é a criação de um projeto com duas partes, **back-end** e **front-end**, decidi utilizar o **Monorepo** para organizar os projetos. O **Monorepo** consiste em organizar vários projetos dentro de uma única estrutura de diretórios. Isso permite que os projetos sejam mantidos e gerenciados de forma mais eficiente, além de facilitar a comunicação e a integração entre os projetos. Para facilitar a configuração, eu estou utilizando uma solução da [**Versel**](https://vercel.com) chamada **[Turborepo](https://turbo.build)**.

Para entender melhor o **Monorepo**, recomendo a leitura do artigo "[Monorepo: como usá-lo para desenvolver e integrar grandes projetos](https://www.alura.com.br/artigos/monorepo-usa-lo-desenvolver-integrar-grandes-projetos)". 

## Começando

### Clonando o repositório

Abra o terminal e execute o seguinte comando:

```bash
git clone https://github.com/bruno-valero/teste-pratico-digigrow
```

Então acesse o repositório, usando o comando `cd`:

```bash
cd teste-pratico-digigrow
```

---

### Instalação

```bash
npm install
```

---

### Rodando a checagem de tipos

```bash
npm run types
```
---

### Rodando o linter

```bash
npm run lint
```
---

### Variáveis de ambiente

Para realizar os passos a seguir, é necessário ter as seguintes variáveis de ambiente definidas no módulo de infra e no módulo de frontend:

- Crie um arquivo `.env` na [raiz do módulo de infra](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/infra) e adicione as variáveis de ambiente. Para saber quais são as variáveis de ambiente necessárias, consulte o arquivo [`.env.example`](https://github.com/bruno-valero/teste-pratico-digigrow/blob/main/apps/infra/.env.example).
- Crie um arquivo `.env` na [raiz do módulo de frontend](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/frontend) e adicione as variáveis de ambiente. Para saber quais são as variáveis de ambiente necessárias, consulte o arquivo [`.env.example`](https://github.com/bruno-valero/teste-pratico-digigrow/blob/main/apps/frontend/.env.example).

---

### Rodando os testes

Há dois tipos de testes: os **unitários** e os **end-to-end**. Os **unitários** são os testes que são executados na camada de domínios da aplicação, enquanto os **end-to-end** são executados na camada de infraestrutura da aplicação.

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

### Fazendo a Build

O comando abaixo irá gerar os arquivos de build de ambas as aplicações. Tanto a aplicação de infra como a aplicação de front-end.

```bash
npm run build
```

**Atenção!:** 4 processos irão ser executados para a finalização completa da build:

1. **build-domains:** Para compilar o código do pacote de domínios.
2. **build-infra:** Para compilar o código do pacote de infraestrutura.
3. **run-infra:** Para executar o código do pacote de infraestrutura. Esse processo é executado para garantir que a build do front-end, que será a próxima etapa, possa fazer requisições à API do pacote de infraestrutura durante seu processo de build.
4. **build-frontend:** Para compilar o código do pacote de front-end.

**Observação!:** Após a conclusão do quarto processo, mate o terminal, pois o terceiro processo não será finalizado, já que ele manterá o servidor rodando.

---

### Rodando a build das aplicações

Para rodar a build das aplicações, execute o comando abaixo.

```bash
npm start
```

- Para acessar a aplicação de infraestrutura (back-end), acesse [http://localhost:3333](http://localhost:3333) e consulte a documentação da API feita com **Swagger** em [http://localhost:3333/docs](http://localhost:3333/docs).
- Para acessar a aplicação de front-end, acesse [http://localhost:3000](http://localhost:3000).

---