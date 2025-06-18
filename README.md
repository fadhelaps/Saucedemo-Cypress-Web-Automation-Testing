# SauceDemo Web Automation Testing with Cypress, Cucumber, and Page Object Model

This project is an automated test framework for the website [saucedemo.com](https://www.saucedemo.com/), built using **Cypress** and **Cucumber** with a **Page Object Model (POM)** structure.

## 📁 Project Structure

The test files are organized as follows:

cypress/
├── e2e/
│ └── login/
│ └── login.feature # Gherkin-based test scenarios
├── fixtures/ # Test data (if any)
├── locators/
│ └── loginLocators.js # Locators for login elements
├── page_object/
│ └── loginPage.js # Page Object functions for login page
├── support/
│ ├── step_definitions/
│ │ └── loginSteps.js # Step definitions for login.feature
│ ├── commands.js # Custom Cypress commands (optional)
│ └── e2e.js # Cucumber preprocessor config


Other configuration files:
- `cypress.config.js` — Cypress configuration
- `package.json` — Project dependencies and scripts

## 🔧 Tools & Technologies

- ✅ Cypress
- ✅ Cucumber (via Cypress Cucumber Preprocessor)
- ✅ JavaScript
- ✅ Gherkin syntax for BDD
- ✅ Page Object Model pattern

## 🧪 Features Covered

- Login test using valid and invalid credentials
- Separation of locators, page actions, and step definitions
- Use of BDD syntax: `Given`, `When`, `Then`

## 🚀 How to Run the Tests

1. Clone the repository:
   ```bash
   https://github.com/fadhelaps/Saucedemo-Cypress-Web-Automation-Testing.git
   
2. install the dependencies
   npm install

3. Run test via Cypress Test Runner (GUI)
   npx cypress open

📄 Notes
This project demonstrates clean architecture for test automation.
Feel free to expand the project by adding more feature files and pages.

