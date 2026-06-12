Feature: Pesquisa de artigos

    Como visitante do Blog Agibank
    Quero pesquisar artigos
    Para encontrar conteúdos relacionados ao tema desejado

Scenario: Pesquisar artigo inexistente

    Given que acesso o Blog Agibank
    When realizo uma pesquisa por um artigo inexistente
    Then devo visualizar que nenhum resultado foi encontrado
    