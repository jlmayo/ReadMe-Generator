// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description.",
    },
    {
        type: "input",
        name: "usage",
        message: "How will your project be used?",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions",
    },
    {
        type: "input",
        name: "contributions",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "testing",
        message: "Please list instructions for testing",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license used for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ]
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter your GitHub unsername",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
