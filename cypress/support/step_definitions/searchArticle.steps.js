import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from '../pages/SearchPage'
import searchData from '../../fixtures/searchData.json'

Given('que acesso o Blog Agibank', () => {
    SearchPage.accessBlog()
})

When('realizo uma pesquisa por um artigo válido', () => {
    SearchPage.searchArticle(searchData.validSearches[0])
    SearchPage.clickSearchButton()
})

Then('devo visualizar resultados relacionados ao termo pesquisado', () => {
    SearchPage.validateResults()
})