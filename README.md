1. Cypress Installation : 
    Intialiatialize package.josn : npm init
    Install Cypress via npm : npm install --save-dev cypress@9.7.0
    To open cypress dashboard : npx cypress open

2. Integrate xpath in cypress :
    npm install -D cypress-xpath
    
3. Integrate chance.js in cypress : 
    npm install chance
    
4. Integrate Allure report in cypress : 
    a. Installation : 
          Install allure : npm i -D @shelex/cypress-allure-plugin
          Install allure-commandline : npm install -g allure-commandline --save-dev
          Install mocha allure report : npm install mocha-allure-reporter
    b. Scripts in package.json to generate allure report : 
          "scripts": {
            "cy:run": "cypress run --env allure=true",
            "allure:report": "allure generate allure-results --clean -o allure-report",
            "allure:clear": "if exist allure-results rmdir /q /s allure-results && if exist allure-report rmdir /q /s allure-report && if exist cypress\\screenshots rmdir /q /s cypress\\screenshots && if exist cypress\\videos rmdir /q /s cypress\\videos",
            "pretest": "npm run allure:clear",
            "openAllurereport" : "allure open allure-report",
            "test": "npm run cy:run || npm run posttest && npm run openAllurereport",
            "posttest": "npm run allure:report"
          }
    c. Run scripts from package.json :
          npm run test
