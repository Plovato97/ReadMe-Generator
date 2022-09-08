// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'));
}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers.projectName)


        writeToFile('test.txt', answers.projectName)
    });
};

// Function call to initialize app
init();
