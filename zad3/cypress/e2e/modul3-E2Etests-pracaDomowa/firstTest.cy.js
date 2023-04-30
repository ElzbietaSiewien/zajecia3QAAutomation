/// <reference types="cypress"/>

import LoginPage from "../../pages/Login";
import HomePage from "../../pages/HomePage";

describe("Login and Logout on site", () => {
  let loginPage;
  let homePage;

  before(() => {
    loginPage = new LoginPage();
    homePage = new HomePage();
  });

  beforeEach("Otwórz stronę LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Znajdź pole email i wpisz adres", () => {
    loginPage.getLogin().type("user888@gmail.com");
    loginPage.getPassword().type("1234567890");
    loginPage.getLogIn().click();

    homePage.getMenuButton().click();
    homePage.getLogOut().click();
  });

  it("Znajdź pole email i wpisz adres 2", () => {
    loginPage.getLogin().type("testowyqa@qa.team");
    loginPage.getPassword().type("QA!automation-1");
    loginPage.getLogIn().click();

    homePage.getMenuButton().click();
    homePage.getLogOut().click();
  });
});
