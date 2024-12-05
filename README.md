# Cypress Angular Project

## 📋 Description

This project showcases how to integrate **Cypress** into an **Angular** application for end-to-end testing. It provides a step-by-step guide to set up Cypress, run tests, generate reports, and write sample test cases for a seamless testing experience in modern Angular projects.

---

## 🚀 Features
- **Quick Setup**: Simplified integration of Cypress in Angular projects.
- **Test Automation**: Write and execute automated end-to-end tests.
- **Comprehensive Reports**: Generate detailed reports of test outcomes.
- **Example Test Case**: Includes a sample login test with redirection validation.

---

## 🛠 Installation and Setup

### Step 1: Install Cypress
To add Cypress to your Angular project, run:

```bash
ng add @cypress/schematic
```

This command configures Cypress, creating necessary configuration files and a sample test file (`spec.ts`).

---

### Step 2: Run Cypress Test Runner
Open the Cypress Test Runner with the following command:

```bash
npm run cypress:open
```

In the Cypress Test Runner, click on the `spec.ts` file to execute the sample test cases in a browser.

---

### Step 3: Generate Test Reports
Run the Cypress tests from the terminal and generate success/failure reports using:

```bash
npm run cypress:run
```

This executes all tests in headless mode and provides a summary in the terminal.

---

## 💡 Example Test Case

Here’s a sample test case to validate a login page and redirect functionality:

```javascript
it('Should enter valid email and password and redirect to the dashboard', () => {
  cy.visit('/login');
  cy.url().should('include', 'login');
  cy.get('#loginFormEmailInput').type('parth@gmail.com');
  cy.get('#loginFormPasswordInput').type('Parth@123');
  cy.get('#loginFormSubmitButton').click();
  cy.get('#loginFormEmailInputValue').should('be.visible');
  cy.get('#loginFormEmailInputValue').should('have.text', 'Email: parth@gmail.com');
  cy.get('#loginFormPasswordInputValue').should('be.visible');
  cy.get('#loginFormPasswordInputValue').should('have.text', 'Password: Parth@123');
});
```

---

## 🧪 Key Cypress Commands
- **`cy.visit('/url')`**: Navigate to a specified URL.
- **`cy.get('selector')`**: Select an element from the DOM.
- **`cy.type('text')`**: Simulate typing in an input field.
- **Assertions (`should`)**:
  - `.should('be.visible')`: Check if an element is visible.
  - `.should('have.text', 'value')`: Validate element's text content.

---

## 🛠 Resources
- [Cypress Official Documentation](https://www.cypress.io/)
- [Angular Official Documentation](https://angular.dev/)
- [Cypress Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository, improve the code, and submit a pull request. Let’s build together!

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
