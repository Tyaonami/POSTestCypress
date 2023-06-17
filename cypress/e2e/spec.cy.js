
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

  describe("creating & editing customers in POS", () => {
    beforeEach(() => {
      //Enter  autorization data clientCode,username, password
      cy.login("clientCode", "username", "password");
      cy.get('[data-testid="customer-badge-icon-span"]').click();
    })

    it("Creating a customer Person with only required fields", () => {
      cy.get('[data-testid="firstName"]').type("Linda");
      cy.get('[data-testid="lastName"]').type("Urb");
      cy.get('[data-testid="save-button"]').click();
      cy.get('[data-testid="customer-name"]').should("have.text", "Linda Urb");
    });

    it("Entering an invalid email", () => {
      cy.get('[data-testid="firstName"]').type("Linda");
      cy.get('[data-testid="lastName"]').type("Urb");
      cy.get('[data-testid="email"]').type("abc..def@mail.com");
      cy.get('[class="invalid-feedback"]').should("have.text", "This field must be a valid email address");
    });

  });
  