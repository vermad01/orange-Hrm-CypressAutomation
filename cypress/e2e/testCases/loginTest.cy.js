import login from "../pageObject/loginPage"

describe('Login suit',function() {

    

    it('verify login',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        const loginPage = new login();

        cy.fixture('userData').then(function(data){

            loginPage.enterUsername(data.username)
            loginPage.enterPassword(data.password)
            loginPage.clickSubmitButton()
            // loginPage.validateText()
        })

       
    })
})