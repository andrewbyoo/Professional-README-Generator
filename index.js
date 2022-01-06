// TODO: Include packages needed for this application
const fs = require('fs');
const async = require('async');
const inquirer = require('inquirer');
const generatedREADME = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a description for your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Write a user story for your project.',
    name: 'userStory',
  },
  {
    type: 'input',
    message: 'Write the installation instructions for your project. (Note: Generated README will already include the instructions to clone the repo.)',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Write a description of your planned web visual. (Note: After README is generated, please go back to edit the visual alt tag and visual link.)',
    name: 'visual',
  },
  {
    type: 'input',
    message: 'Write any contributors to your project and their contact information.',
    name: 'credits',
  },
  {
    type: 'input',
    message: 'Write a list of features for your project. (Note: Features must be written as an array. e.g. ["Feature 1", "Feature 2", "Feature 3"])',
    name: 'features',
  },
  {
    type: 'input',
    message: 'Write how other developers can contact you to contribute to the project.',
    name: 'contact',
  },
];

// TODO: Create a function to write README file
const writeToFile = data => {
  fs.writeFile('generated-README.md', data, (err) =>
  err ? console.error(err) : console.log('README has been generated'));
}

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt(questions)
    .then((response) => module.exports = response)
}

// Function call to initialize app
init();
