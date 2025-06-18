Feature: failed login to saucedemo.com
    Scenario: failed login due to invalid username
        Given Open the website
        When Verify login page website
        Then Login page appears
        When Input username with invalid user name "invalidUser"
        Then Username field filled
        When Input password with valid password
        Then Password field filled
        When Click login button
        Then Error message appears "invalidCredential"
        When Click button close error message
        Then Verify login page website
