class HomePage {
  getMenuButton() {
    return cy.get(".css-7afvtf");
  }

  getLogOut() {
    return cy
      .get(".css-r81hpm div")
      .last()
      .click()
      .should("have.text", "Log out");
  }
}

export default HomePage;
