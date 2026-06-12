import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from '../pages/SearchPage'
import searchData from '../../fixtures/searchData.json'

Given('que acesso o Blog Agibank', () => {
    SearchPage.accessBlog()
})

When('realizo uma pesquisa por um artigo válido', () => {
    SearchPage.searchArticle(searchData.validSearches[1])
})

When('realizo uma pesquisa por um artigo inexistente', () => {
    SearchPage.searchArticle(searchData.invalidSearch)
    SearchPage.clickSearchButton()
})

When('digito um termo válido na pesquisa', () => {
    SearchPage.searchArticle(searchData.validSearches[2])
})

When('clico no botão pesquisar', () => {
    SearchPage.clickSearchButton()
})

Then('devo visualizar resultados relacionados ao termo pesquisado', () => {
    SearchPage.validateResults()
})

Then('devo visualizar que nenhum resultado foi encontrado', () => {
    SearchPage.validateNoResults()
})

Then('seleciono um dos artigos retornados', () => {
    SearchPage.selectFirstResult()
})

Then('seleciono uma das sugestões apresentadas', () => {
    SearchPage.validateSuggestions()
    SearchPage.selectFirstSuggestion()
})

Then('devo visualizar o conteúdo do artigo', () => {
    SearchPage.validateSelectedArticle()
})