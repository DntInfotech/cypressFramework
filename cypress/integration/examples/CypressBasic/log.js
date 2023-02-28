/// <reference types="Cypress" />


describe("this is my suite",function(){

    const execlpath="D:/payload/Book1.xlsx"
    const sheetname="login"
    
    

    it("this is my test",function(){
        cy.task("genrateJSONsromExcel",{execlpath,sheetname}).then(function(user)
    {
        console.log("user"+user)

    this.user=user


    })
        cy.visit('https://parabank.parasoft.com/');
        cy.get("input[type='text']").clear();
        cy.get("input[type='text']").type("roshanmorkhade96");
        cy.get("input[type='password']").clear();
        cy.get("input[type='password']").type("Roshan@12345")
        cy.get(':nth-child(5) > .button').click();
    })
})