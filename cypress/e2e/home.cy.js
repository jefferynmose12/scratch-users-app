describe('testing the application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('showing error messages when entering wrong input', () => {
    cy.get("[data-testid='btn-create']").click()
    cy.get("[data-testid='firstName']").type("doris")
    cy.get("[data-testid='lastName']").type("lade")
    cy.get("[data-testid='email']").type("nkem.com")
    cy.get("[data-testid='role']").select('doctor')
    cy.get("[data-testid='status']").select('active')
    cy.get("[data-testid='btn-add']").click()
    cy.get("[data-testid='err']").should("exist")
  })

  it('showing form page and adding new user', () => {
    cy.get("[data-testid='btn-create']").click()
    cy.get("[data-testid='firstName']").type("nkem")
    cy.get("[data-testid='lastName']").type("kolade")
    cy.get("[data-testid='email']").type("nkem@gmail.com")
    cy.get("[data-testid='role']").select('doctor')
    cy.get("[data-testid='status']").select('active')
    cy.get("[data-testid='btn-add']").click()
  })

  it('deleting of a user', () => {
    cy.get("[data-testid=1]").click()
    cy.get("joe").should('not.exist')
  })

  it('editing and saving a user detail', () => {
    cy.get("[data-testid='biden']").click()
    cy.get("[data-testid='editfirstName']").clear().type("bukky")
    cy.get("[data-testid='editlastName']").clear().type("felix")
    cy.get("[data-testid='editemail']").clear().type("bukky@gmail.com")
    cy.get("[data-testid='editrole']").select('accountant')
    cy.get("[data-testid='editstatus']").select('inactive')
    cy.get("[data-testid='save']").click()
  })
})