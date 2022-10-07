// TODO: Include packages needed for this application
const { createDecipheriv } = require('crypto');
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('utils');
const markdown = require('./generateMarkdown');
const writeFileAsync = utils.promisify(fs.writeFile);

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
            "MIT",
            "Ulicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-clause",
            "Mozilla Public License 2.0",
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

const promptUser = () => {
    return inquirer
        .prompt(questions);
};

// TODO: Create a function to write README file
const writeToFile(fileName, data) => {
    return writeFileAsync(fileName, data);
};

// TODO: Create a function to initialize app
const init = async () => {
    try {
        console.log('Please answer these questions to create a ReadMe file.');

        const answers = await promptUser();

        const fileContent = markdown(answers);

        await writeToFile('./ReadMe.md', fileContent);

        console.log('Success! ReadMe created.');

    } catch (err) {
        console.error('File not created due to error.');
        console.log(err);
    }
};

// Function call to initialize app
init();
