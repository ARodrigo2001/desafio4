class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    fillEmail(value) {
      cy.get('label[for=usuario]').type(value);
    }
  
    fillPassword(value) {
      cy.get('label[for=senha]').type(value);
    }
  
    submit() {
      cy.get('button[type=submit]').click();
    }
  }
  
  export const loginPage = new LoginPage();
  