Feature: login website saucedemo.com
    Scenario: Login with valid credentials
        Given Open the website
        When Verify login page website
        Then Login page appears
        When Input username with valid user name "standard_user"
        Then Username field filled "standard_user"
        When Input password with valid password "secret_sauce"
        Then Password field filled
        When Click login button
        Then Home page website appears

