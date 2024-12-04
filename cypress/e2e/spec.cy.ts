describe('My First Test', () => {

  it('Should enter valid email and password and redirect to the dashboard', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');

    cy.get('#loginFormEmailInput').type('partha@gmail.com');
    cy.get('#loginFormPasswordInput').type('Parth@123');

    cy.get('#loginFormSubmitButton').click();

    cy.get('#loginFormEmailInputValue').should('be.visible');
    cy.get('#loginFormEmailInputValue').should('have.text', 'Email: partha@gmail.com');

    cy.get('#loginFormPasswordInputValue').should('be.visible');
    cy.get('#loginFormPasswordInputValue').should('have.text', 'Password: Parth@123');
  });
});
