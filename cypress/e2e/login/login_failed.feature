Feature: failed login to saucedemo.com
    Scenario: failed login due to invalid username
        Given Open the website
        When Verify login page website
        Then Login page appears
        When Input username with valid user name "invalid_username"
        Then Username field filled "invalid_username"
        When Input password with valid password "secret_sauce"
        Then Password field filled
        When Click login button
        Then Error message appears "Epic sadface: Username and password do not match any user in this service"
        When Click button close error message
        Then Verify login page website
