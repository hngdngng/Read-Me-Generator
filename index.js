const fs = require("fs");
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: "title",
        message: "Project Title:",
    },
    {
        name: "description",
        message: "Description:",
    },
    {
        name: "tOC",
        message: "Table of Content:",
    },
    {
        name: "installation",
        message: "Installation Instructions:",
    },
    {
        name: "usage",
        message: "Usage Information:",
    },
    {
        type: "list",
        message: "Select your license",
        name: "license",
        choices: [
            "GNU GPLv3",
            "MIT"
        ]
    },
    {
        name: "github",
        message: "GitHub username:",
    },
    {
        name: "email",
        message: "Email Address:",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

// function to initialize program
function init() {
            inquirer
                .prompt(questions)
                .then(data => {
                    console.log(data);
                    generate(data)
                })
        }

function generate(data) {
    generator.generateMarkdown(data);
}

// function call to initialize program
init();

