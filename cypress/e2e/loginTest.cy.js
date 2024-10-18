import { loginPage } from '../pages/loginPage';

describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    loginPage.visit();
    loginPage.fillEmail(Cypress.env('username'));
    loginPage.fillPassword(Cypress.env('password'));
    loginPage.submit();

    cy.url().should('include', '/produto');
  });
});
