class SearchPage {

    selectors = {
        // Busca
        searchButtonHeader: '[aria-label="Search icon link"]',
        searchInput: 'input[name="s"]',
        searchSubmitButton: '#search_submit',

        // Sugestões (autocomplete)
        liveSearchResults: '.ast-live-search-results',
        liveSearchItems: '.ast-search-item',

        // Resultados da pesquisa
        searchResults: 'article.post',
        resultTitle: 'article.post h2.entry-title a',

        // Página do artigo
        articleTitle: 'h1.entry-title',

        // Pesquisa sem resultado
        noResultsSection: '.no-results'
    }

    accessBlog() {
        cy.visit('/')
    }

    openSearch() {
        cy.get(this.selectors.searchButtonHeader)
            .first()
            .click()
    }

    fillSearchInput(article) {
        cy.get(this.selectors.searchInput)
            .clear()
            .type(article)
    }

    clickSearchButton() {
        cy.get(this.selectors.searchSubmitButton)
            .click()
    }

    searchArticle(article) {
        this.openSearch()
        this.fillSearchInput(article)
    }

    validateSuggestions() {
        cy.get(this.selectors.liveSearchResults)
            .should('be.visible')

        cy.get(this.selectors.liveSearchItems)
            .should('have.length.greaterThan', 0)
    }

    selectFirstSuggestion() {
        cy.get(this.selectors.liveSearchItems)
            .first()
            .invoke('text')
            .then((title) => {
                cy.wrap(title.trim()).as('selectedArticle')
            })

        cy.get(this.selectors.liveSearchItems)
            .first()
            .click()
    }

    validateResults() {
        cy.get(this.selectors.searchResults)
            .should('have.length.greaterThan', 0)
    }

    selectFirstResult() {
        cy.get(this.selectors.resultTitle)
            .first()
            .invoke('text')
            .then((title) => {
                cy.wrap(title.trim()).as('selectedArticle')
            })

        cy.get(this.selectors.resultTitle)
            .first()
            .click()
    }

    validateSelectedArticle() {
        cy.get('@selectedArticle')
            .then((selectedArticle) => {

                cy.get(this.selectors.articleTitle)
                    .invoke('text')
                    .then((articleTitle) => {

                        expect(articleTitle.trim())
                            .to.equal(selectedArticle)

                    })

            })
    }

    validateArticleContent() {
        cy.get(this.selectors.articleTitle)
            .should('be.visible')
            .and('not.be.empty')
    }

    validateNoResults() {
        cy.get(this.selectors.noResultsSection)
            .should('be.visible')

        cy.contains(
            'Lamentamos, mas nada foi encontrado para sua pesquisa'
        ).should('be.visible')
    }
}

export default new SearchPage()