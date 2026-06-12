Feature: Pesquisa de artigos

    Como visitante do Blog Agibank
    Quero pesquisar artigos
    Para encontrar conteúdos relacionados ao tema desejado

Scenario: Pesquisar artigo existente

    Given que acesso o Blog Agibank
    When realizo uma pesquisa por um artigo válido
    Then devo visualizar resultados relacionados ao termo pesquisado
    