# Teste Prático da Digigrow - Domínios da Aplicação

Este é um teste prático proposto pela **Digigrow**. O teste prático consiste na criação de uma aplicação com duas partes: **back-end** e **front-end**. Este diretório e suas subpastas contém a parte do domínio da aplicação que será utilizado pelo **back-end**.

## O que são os Domínios da aplicação?

Eu desenvolverei esta aplicação utilizando a metodologia **Domain-Driven Design** que basicamente se resume em isolar toda a lógica e as regras de negócio da aplicação para que ela possa ficar desacoplada e assim permitir maior liberdade para realizar mudanças na infraestrutura, sem comprometer as regras de negócio.

Para entender mais sobre a metodologia **Domain-Driven Design**, recomendo ler o seguinte artigo [Fundamentos do Domain-Driven Design](https://www.brunovalero.com.br/repos/fast-feet-api-desafio-rocketseat/issues/12)

### Infraestrutura (back-end)

Como este módulo é destinado a isolar a lógica e as regras de negócio da aplicação, ele não possui nenhum tipo de infraestrutura. Em vez disso, será utilizado como uma camada de abstração para a infraestrutura, permitindo que a aplicação seja independente da infraestrutura em si. Assim a parte do projeto é responsável apenas pela infraestrutura, como as rotas http e a comunicação com o banco de dados estarão localizadas em outro módulo deste monorepo chamado [**infra**](https://github.com/bruno-valero/teste-pratico-digigrow/tree/main/apps/infra).

---

Abaixo você encontrará os **requisitos funcionais** e as **regras de negócio**. 

### **Atenção!!** 
Todos os tópicos somente serão marcados como concluídos **[X]** mediante a **testes unitários**.

---

### Requisitos funcionais

- [x] Deve ser possível Adicionar uma nova tarefa.
- [x] Deve ser possível Listar todas as tarefas.
- [x] Deve ser possível Obter os detalhes de uma tarefa específica.
- [x] Deve ser possível Atualizar uma tarefa existente.
- [x] Deve ser possível Excluir uma tarefa.

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