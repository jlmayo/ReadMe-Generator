// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const markdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

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
            "Perl",
            "Eclipse Public License 1.0",
            "Apache 2.0",
            "GNU GPL v3",
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
    {
        type: "input",
        name: "video",
        message: "Please include the url for application walkthrough.",
    }
];

const promptUser = () => {
    return inquirer
        .prompt(questions);
};

// TODO: Create a function to write README file
//Will either create or overwrite an existing ReadMe
const writeToFile = (fileName, data) => {
    return writeFileAsync(fileName, data);
};

// TODO: Create a function to initialize app
//Used await/async to include prompt answers in writeToFile creation or override
const init = async () => {
    try {
        console.log('Please answer these questions to create a ReadMe file.');

        const answers = await promptUser();

        const readMeContent = markdown(answers);

        await writeToFile('./ReadMe.md', readMeContent);

        console.log('Success! ReadMe created.');

    } catch (err) {
        console.error('File not created due to error.');
        console.log(err);
    }
};

// Function call to initialize app
init();
