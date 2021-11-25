context('Live Feed e2e Testcases', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should check from login', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.visit('http://localhost:3000/');
    });

    it('should check from login', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.visit('http://localhost:3000');
        cy.get("#heading").should("have.text", "Daily Live News Feed");

    });
    it('should check from register', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.visit('http://localhost:3000/register');
    });
    it('should be check from dashboard', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.visit('/');
        cy.get('#heading').type('text');
        cy.get('#filter').type('button');
    });
    it('should check from readnow', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.visit('http://localhost:3000/readNow');
    });

    it('should check from Filter', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.visit('http://localhost:3000/filter');
    });

    it('should check for readnow button', () => {
        cy.get("#btnreadnow").click();
    });

    it('should check for filter button', () => {
        cy.get("#btnfilter").click();
    });

    it('should check for filter modal', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.get("#btnfilter").click();
        cy.visit('http://localhost:3000/filter');
    });
    it('should check for Logout', () => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.get("#btnlogout").click({force: true});
        cy.visit('http://localhost:3000/login');
    });
    it('should be check from displayCard' ,() => {
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#btnLogin").click();
        cy.visit('/footer');
        cy.get('#footertext').should("have.text" , "Live Feed &copy; 2021");
    }) ;  
});
