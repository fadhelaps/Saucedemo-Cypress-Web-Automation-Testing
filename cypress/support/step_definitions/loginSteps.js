import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../page_object/loginPage";

const loginPage = new LoginPage;

Given('Open the website', () => {
  cy.visit('/');
});

When('Verify login page website', () => {
    loginPage.verifyLoginPage();
})

Then('Login page appears', () => {
    return true;
})

When('Input username with valid user name {string}', (userName) => {
    loginPage.inputUsername(userName);
})

Then('Username field filled {string}', (userName) => {
    loginPage.verifyUsernameFiled(userName);
})

When('Input password with valid password {string}', (password) => {
    loginPage.inputPassword(password);
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

