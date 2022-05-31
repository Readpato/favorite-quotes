/// <reference types="cypress" />

describe("Test Navigation Bar", () => {
  it("Clicks the logo and takes you to the main page", () => {
    cy.visit("/");
    cy.get("[data-cy=nav-bar]").should("be.visible").and("exist");
    cy.get("[data-cy=logo]").click();
    cy.url().should("contain", "localhost:5050");
    cy.viewport("iphone-6");
    cy.get("[data-cy=nav-bar] h1").should("not.be.visible").and("exist");
    cy.get("[data-cy=nav-bar]").should("be.visible").and("exist");
    cy.get("[data-cy=logo]").click();
    cy.url().should("contain", "localhost:5050");
  });
  it("Assess navigation links work good in non mobile screens", () => {
    cy.visit("/");
    cy.get("[data-cy=nav-links-lg]").should("be.visible").and("exist");
    cy.get("[data-cy=nav-links-lg] li").should("have.length", "2");
    cy.get("[data-cy=nav-links-lg] li")
      .first()
      .should("contain.text", "Add a quote");
    cy.get("[data-cy=nav-links-lg] li").first().click();
    cy.url().should("contain", "localhost:5050");
    cy.get("[data-cy=nav-links-lg] li").last().should("contain.text", "About");
    cy.get("[data-cy=nav-links-lg] li").last().click();
    cy.url().should("contain", "localhost:5050");
  });
  it("Assess the nav link button appears on mobile and interact with it", () => {
    cy.visit("/");
    cy.get("[data-cy=nav-links-button]").should("exist").and("not.be.visible");
    cy.get("[data-cy=nav-links-mobile]").should("not.exist");
    cy.viewport("iphone-6");
    cy.get("[data-cy=nav-links-button]").should("exist").and("be.visible");
    cy.get("[data-cy=nav-links-mobile]").should("not.exist");
    cy.get("[data-cy=nav-links-button]").click();
    cy.get("[data-cy=nav-links-mobile]").should("exist").and("be.visible");
    cy.get("[data-cy=nav-links-button]").click();
    cy.get("[data-cy=nav-links-mobile]").should("not.exist");
  });
});
