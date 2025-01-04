# Teste Prático da Digigrow - Sessão de Back-End

Este é um teste prático proposto pela **Digigrow**. O teste prático consiste na criação de uma aplicação com duas partes: **back-end** e **front-end**. Este diretório e suas subpastas contém a parte do **back-end** da aplicação.

## Domain-Driven Design

O projeto é baseado no **Domain-Driven Design (DDD)**. O DDD é uma abordagem de projeto orientada a **domínios** que visa a separação de responsabilidades e o isolamento de código. O projeto segue a **clean architecture** e utiliza o **DDD** para isolar e organizar a lógica de negócio. Para saber mais sobre o DDD, recomendo a leitura do artigo [Fundamentos do Domain-Driven Design](https://www.brunovalero.com.br/repos/fast-feet-api-desafio-rocketseat/issues/12).

Portanto, todas as classes de domínios, a lógica de negócio e as regras de negócio estão localizadas em outro pacote deste monorepo chamado [**@digigrow/tasks-domains**](link). Assim, esta parte do projeto é responsável apenas pela infraestrutura, como as rotas http e a comunicação com o banco de dados.

---

Abaixo você encontrará os **requisitos funcionais**, **não funcionais** e as **regras de negócio**. 

### **Atenção!!** 
Todos os tópicos somemente serão marcados como concluídos mediante a **testes end-to-end**.

---

### Requisitos funcionais

- [x] Deve ser possível Adicionar uma nova tarefa `(POST /tasks)`.
- [x] Deve ser possível Listar todas as tarefas `(GET /tasks)`.
- [x] Deve ser possível Obter os detalhes de uma tarefa específica `(GET /tasks/:id)`.
- [x] Deve ser possível Atualizar uma tarefa existente `(PUT /tasks/:id)`.
- [x] Deve ser possível Excluir uma tarefa `(DELETE /tasks/:id)`.

### Regras de negócio

- [x] O campo **title** é obrigatório.
- [x] A descrição deve ter no máximo **255 caracteres**.
- [x] Para adicionar uma nova tarefa, deve ser enviado um json no formato:

```json
{ 
    "title": "string", 
    "description": "string" 
}
```
- [x] Para editar uma tarefa, deve ser enviado um json no formato:

```json
{ 
    "title": "string", 
    "description": "string" 
}
```

### Requisitos não funcionais

- [x] A aplicação deverá utilizar o **MongoDB** como banco de dados.
- [x] O servidor pode ser desenvolvido utilizando **express.js** ou **fastify**.

## Swagger

Após rodar o projeto com o comando `npm run dev`, você pode acessar a documentação da API através do Swagger. Ela pode ser acessada em [`http://localhost:3333/docs`](http://localhost:3333/docs).
