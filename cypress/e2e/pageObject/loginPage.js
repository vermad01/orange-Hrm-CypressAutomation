class login{

    enterUsername (){
        cy.get("[name='username']").type("Admin")
                
    }

    enterPassword (){
        cy.get("[type='password']").type("admin123")
    }

    clickSubmitButton (){
        cy.get("[type='submit']").click()
    }

}
export default login;