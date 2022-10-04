// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('ReadMe Generator Code/utils/generateMarkdown.js');

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
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "url",
        message: "Please enter the GitHub url for this project.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
    },
];


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    writeFileAsync(fileName, data).then(function () {
        console.log('ReadMe created.');
    }).catch(err => {
        console.log('err', err);
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
