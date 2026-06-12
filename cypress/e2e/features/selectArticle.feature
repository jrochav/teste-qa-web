Feature: Seleção de artigos

    Como visitante do Blog Agibank
    Quero acessar artigos através da pesquisa
    Para visualizar seu conteúdo

Scenario: Selecionar um artigo através da página de resultados

    Given que acesso o Blog Agibank
    When realizo uma pesquisa por um artigo válido
    And clico no botão pesquisar
    And devo visualizar resultados relacionados ao termo pesquisado
    And seleciono um dos artigos retornados
    Then devo visualizar o conteúdo do artigo

Scenario: Selecionar um artigo através das sugestões da pesquisa

    Given que acesso o Blog Agibank
    When digito um termo válido na pesquisa
    And seleciono uma das sugestões apresentadas
    Then devo visualizar o conteúdo do artigo