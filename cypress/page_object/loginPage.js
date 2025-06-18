import { loginLocators } from "../locators/loginLocators.js";

export class LoginPage {
    verifyLoginPage(){
        cy.get(loginLocators.txt_title_login_page)
        .should('contain.text', 'Swag Labs');
        cy.get(loginLocators.username_field)
        .should('have.attr', 'placeholder', 'Username');
        cy.get(loginLocators.password_field)
        .should('have.attr', 'placeholder', 'Password');
        cy.get(loginLocators.btn_login);
    }

    inputUsername(userName){
        cy.get(loginLocators.username_field)
        .type(userName)
    };

    verifyUsernameFiled(userName){
        cy.get(loginLocators.username_field)
        .should('have.value', userName);
    }

    inputPassword(password){
        cy.get(loginLocators.password_field)
        .type(password);
    }

    clickBtnLogin(){
        cy.get(loginLocators.btn_login)
        .click();
    }

    verifyHomepage(){
        cy.get(loginLocators.txt_title_home_page)
        .should('have.text', 'Swag Labs');
        cy.get(loginLocators.txt_product_home_page)
        .should('have.text', 'Products')
        cy.get(loginLocators.btn_side_bar_menu);
        cy.get(loginLocators.btn_shopping_cart);
    }

    verifyErrorMessage(errorMessage){
        cy.get(loginLocators.txt_error_message)
        .should('have.text',  errorMessage);
        cy.get(loginLocators.btn_close_error_message);
    }

    clickBtnCloseError(){
        cy.get(loginLocators.btn_close_error_message)
        .click();
    }

}

