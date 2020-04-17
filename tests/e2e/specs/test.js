describe("Should throw an validation error", () => {
  it("Try to send a empty form", () => {
    cy.visit("/deck/new");

    cy.get("[data-cy=submit]").click();

    cy.get(".Vue-Toastification__toast-body").contains(
      "You need to fill at least one card field."
    );
  });

  it("Try to send empty rotation card", () => {
    cy.visit("/deck/new");

    cy.get("[data-cy='CARD 1']").type("AH");

    cy.get("[data-cy=submit]").click();

    cy.get(".Vue-Toastification__toast-body").contains(
      "Rotation Card is required"
    );
  });

  it("Try to send empty invalid cards", () => {
    cy.visit("/deck/new");

    cy.get("[data-cy='CARD 1']").type("AX");
    cy.get("[data-cy='CARD 2']").type("AB");
    cy.get("[data-cy='rotation']").type("AZ");

    cy.get("[data-cy=submit]").click();

    cy.get(".Vue-Toastification__toast-body").contains("Invalid Card(s)");
  });
});

describe("Should create a new deck", () => {
  it("Create a deck with many fullhouse", () => {
    cy.visit("/deck/new");

    cy.get("[data-cy='CARD 1']").type("2H");
    cy.get("[data-cy='CARD 2']").type("2D");
    cy.get("[data-cy='CARD 3']").type("2C");
    cy.get("[data-cy='CARD 4']").type("2S");
    cy.get("[data-cy='CARD 5']").type("3H");
    cy.get("[data-cy='CARD 6']").type("3D");
    cy.get("[data-cy='CARD 7']").type("3C");
    cy.get("[data-cy='rotation']").type("2H");

    cy.get("[data-cy=submit]").click();

    cy.url().should("not.match", /deck\/new/);
  });
});
