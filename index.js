// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name/ Repo name?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL v3.0','None']
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'command',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Readme Generated!'));
};


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
        console.log|(answers)
        writeToFile('README.md', generateMarkdown(answers))
    });
};

// Function call to initialize app
init();
