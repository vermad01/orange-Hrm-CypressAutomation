class homePage{

    validateText(){
        cy.get(".oxd-text--h6").should('have.text','Dashboard')
        }
    // verifyUser(){
    //     cy.get(".oxd-userdropdown-name").should('have.text','Bob Tester')
    // }


}

export default homePage;