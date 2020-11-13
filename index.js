// External Packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input', 
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if(answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();