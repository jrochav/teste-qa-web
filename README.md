# Teste QA - AGI

## Descrição

Este projeto contém a automação de testes da funcionalidade de pesquisa e seleção de artigos do Blog Agibank, desenvolvida como parte do teste técnico para a vaga de QA.

A automação foi implementada utilizando:

* Cypress
* JavaScript
* Cucumber (BDD)

## Cenários Automatizados

Com base nos arquivos Gherkin estruturados no projeto, foram automatizados os seguintes fluxos:

### 1. Busca de artigo existente (`searchArticle.feature`)
Valida que o usuário consegue pesquisar um termo válido e visualizar artigos relacionados ao conteúdo pesquisado.

### 2. Busca de artigo inexistente (`searchFalseArticle.feature`)
Valida o comportamento da aplicação ao pesquisar um termo sem resultados no banco de dados do blog.

### 3. Seleção de artigo (`selectArticle.feature`)
Valida que o usuário consegue interagir e abrir com sucesso um artigo listado após a realização de uma busca.

## Estrutura do Projeto

```text
cypress
├── e2e\features
│   ├── searchArticle.feature
│   ├── searchFalseArticle.feature
│   └── selectArticle.feature
├── fixtures
│   └── searchData.json
├── support
│   ├── pages
│   │   └── SearchPage.js
│   ├── step_definitions
│   │   ├── searchArticle.steps.js
│   │   ├── searchFalseArticle.steps.js
│   │   └── selectArticle.steps.js
│   └── e2e.js
├── node_modules
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Pré-requisitos

* Node.js 18+
* NPM

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## Execução dos Testes

Executar em modo interativo (Interface Gráfica do Cypress):

```bash
npx cypress open
```

Executar em modo headless (Terminal/CI-CD):

```bash
npx cypress run
```

## Considerações

Os cenários foram selecionados por representarem os fluxos críticos da jornada do usuário na funcionalidade de pesquisa do Blog Agibank. A arquitetura adota o padrão **Page Objects** integrado ao **Cucumber**, garantindo alta legibilidade, facilidade de manutenção e reaproveitamento de código.
