//"I'm asking questions through the terminal" requiring a package, use this code
const inquirer = require("inquirer");
//fs allows us to read and write the file
const fs = require("fs");
//path allows us to setup the path and how we trace something through it
const path = require("path");
//gaining access to other .js
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "applicationName",
  },
  {
    type: "input",
    message: "Please enter a description of your application.",
    name: "applicationDesc",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your application.",
    name: "applicationInstall",
  },
  {
    type: "input",
    message: "Please enter usage information about your application.",
    name: "applicationUsage",
  },
  {
    type: "input",
    message: "Please enter the contribution guidelines for your application.",
    name: "applicationContr",
  },
  {
    type: "input",
    message: "Please enter the testing instructions for your application.",
    name: "applicationTest",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    name: "username",
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();
