import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../page_object/loginPage";

const loginPage = new LoginPage;
let loginData;

Given('Open the website', () => {
  cy.visit('/');
});

When('Verify login page website', () => {
    loginPage.verifyLoginPage();
})

Then('Login page appears', () => {
    return true;
})

When('Input username with valid user name {string}', (userType) => {
    cy.fixture('loginData').then((data) => {
        loginData = data[userType];
        loginPage.inputUsername(loginData.userName);
    })
})

When('Input username with invalid user name {string}', (userType) => {
    cy.fixture('loginData').then((data) => {
        loginData = data[userType];
        loginPage.inputUsername(loginData.userName);
    })
})

Then('Username field filled', () => {
    loginPage.verifyUsernameFiled(loginData.userName);
})

When('Input password with valid password', () => {
    loginPage.inputPassword(loginData.password);
})

Then('Password field filled', () => {
    return true; 
})

When('Click login button', () => {
    loginPage.clickBtnLogin();
})

Then('Home page website appears', () => {
    loginPage.verifyHomepage();
})

Then('Error message appears {string}', (errorType) => {
    cy.fixture('loginData').then((data) => {
        loginData = data[errorType];
        loginPage.verifyErrorMessage(loginData.message);
    })
})

When('Click button close error message', () => {
    loginPage.clickBtnCloseError();
})

