describe("this is my suite",function(){
    const execlpath="D:/payload/Book1.xlsx"
    const sheetname="login"
    it("this is my test",function(){

        cy.task("genrateJSONsromExcel",{execlpath,sheetname}).then(function(user)
        {
            
        cy.visit('https://parabank.parasoft.com/');
        cy.get("input[type='text']").clear();
         cy.get("input[type='text']").type(user[0].username);
         cy.get("input[type='password']").clear();
         cy.get("input[type='password']").type(user[0].password)
         cy.get(':nth-child(5) > .button').click();
    
    
        })



    })
})