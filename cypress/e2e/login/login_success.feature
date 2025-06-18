Feature: success login website saucedemo.com
    Scenario: Login with valid credentials
        Given Open the website
        When Verify login page website
        Then Login page appears
        When Input username with valid user name "validUser"
        Then Username field filled
        When Input password with valid password
        Then Password field filled
        When Click login button
        Then Home page website appears