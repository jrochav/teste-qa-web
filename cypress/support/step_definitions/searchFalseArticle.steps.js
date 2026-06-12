import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from '../pages/SearchPage'
import searchData from '../../fixtures/searchData.json'

Given('que acesso o Blog Agibank', () => {
    SearchPage.accessBlog()
})

When('realizo uma pesquisa por um artigo inexistente', () => {
    SearchPage.searchArticle(searchData.invalidSearch)
    SearchPage.clickSearchButton()
})

Then('devo visualizar que nenhum resultado foi encontrado', () => {
    SearchPage.validateNoResults()
})