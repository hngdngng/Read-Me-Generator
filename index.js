const fs = require("fs");
const inquirer = require("inquirer");
const generatorRM = require("./utils/generateMarkdown");
const generatorL = require("./utils/generateLicense");
const questions = JSON.parse(fs.readFileSync('./resources/questions.json'));

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
    writeToFile(`READMEtest.md`, generatorRM.generateMarkdown(data));
}

function generateLicense(data) {
    writeToFile(`LICENSEtest.md`, generatorL.generateLicense(data.name, data.year, data.license));
}

// function call to initialize program
init();