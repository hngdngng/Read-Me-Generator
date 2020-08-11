const fs = require("fs");
const inquirer = require("inquirer");
const generatorRM = require("./utils/generateMarkdown");
const generatorL = require("./utils/generateLicense");


// array of questions for user
const questions = [
    {
        name: "name",
        message: "Your Full Name:",
    },
    {
        name: "year",
        message: "Copyright Year:",
    },
    {
        name: "github",
        message: "Your GitHub username:",
    },
    {
        name: "email",
        message: "Your Email Address:",
    },
    {
        name: "title",
        message: "Project Title:",
    },
    {
        name: "description",
        message: "Description:",
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
        name: "license",
        message: "Select your license",
        choices: [
            "MIT",
            "BSD"
        ]
    },
    {
        name: "contributing",
        message: "Contribution Guidelines",
    },
    {
        name: "test",
        message: "Test Instructions",
    },
];

// function to write file
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
                    generateReadMe(data)
                    generateLicense(data)
                })
        }

function generateReadMe(data) {
    writeToFile(`${data.title}.md`, generatorRM.generateMarkdown(data));
}

function generateLicense(data) {
    writeToFile(`LICENSE.md`, generatorL.generateLicense(data.name, data.year, data.license));
}

// function call to initialize program
init();

