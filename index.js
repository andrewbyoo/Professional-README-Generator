const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdownJS = require('./utils/generateMarkdown.js');

// TODO: Add question for license badge color
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description for your project.',
  },
  {
    type: 'input',
    name: 'userStory',
    message: 'Write a user story for your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Write the installation instructions for your project. (Note: Generated README will already include the instructions to clone the repo.)',
  },
  {
    type: 'input',
    name: 'visual',
    message: 'Write a description of your planned web visual. (Note: After README is generated, please go back to edit the visual alt tag and visual link.)',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license are you using?',
    choices: ['Unlicense', 'Apache', 'cc0-1.0', 'GPLv2', 'GPLv3', 'MIT']
  },
  {
    type: 'list',
    name: 'badgeColor',
    message: 'What color would you like your license badge to be? (Note: If your repo is unlicense, choose any color as a badge will not be generated)',
    choices: ['blue', 'brightgreen', 'green', 'lightgrey', 'orange', 'red', 'yellow', 'yellowgreen']
  },
  {
    type: 'input',
    name: 'features',
    message: 'Write a list of features for your project. (Note: Features must be separated with a & symbol and spaces. [e.g. Feature 1 & Feature 2 & Feature 3])',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
];

const writeToFile = data => {
  fs.writeFile('generated-README.md', data, (err) =>
    err ? console.error(err) : console.log('README has been generated!'));
}

// TODO: Fix initialization function
const init = () => {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile(generateMarkdownJS.generateMarkdown(response)))
    .catch(err => { console.log(err) });
};

// Function call to initialize app
init();
