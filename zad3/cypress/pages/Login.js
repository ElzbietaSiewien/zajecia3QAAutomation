class LoginPage {
  getLogin() {
    return cy.get("#user_email");
  }

  getPassword() {
    return cy.get("#user_password");
  }

  getLogIn() {
    return cy.get(".eckniwg2");
  }
}

export default LoginPage;
