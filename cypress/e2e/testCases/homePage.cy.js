import homePage from "../pageObject/homePgae"
import login from "../pageObject/loginPage"

describe('homeSuit',function(){

    
    it('verifyHomePage',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.fixture('userData').then(function(data){

        const loginPage = new login()
        const homPage = new homePage()

        loginPage.enterUsername(data.username)
        loginPage.enterPassword(data.password)
        loginPage.clickSubmitButton()
        // homPage.validateText()
        // homPage.verifyUser(data.userdetail)
        })

    })
})