// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { stringify } = require('querystring');

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

    const answersArr = (JSON.stringify(answers));


        writeToFile('README.md', answersArr);
    });
};

// Function call to initialize app
init();
