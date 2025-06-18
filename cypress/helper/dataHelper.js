export const getLoginData = (userType) => {
    return cy.fixture('loginData').then((data) => data[userType]);
}