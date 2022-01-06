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
    type: 'input',
    name: 'credits',
    message: 'Write any contributors to your project and their contact information.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Which license are you using?',
  },
  {
    type: 'input',
    name: 'features',
    message: 'Write a list of features for your project. (Note: Features must be written as an array. e.g. ["Feature 1", "Feature 2", "Feature 3"])',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'Write how other developers can contact you to contribute to the project.',
  },
];

const writeToFile = data => {
  fs.writeFile('generated-README.md', data, (err) =>
    err ? console.error(err) : console.log('README has been generated'));
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
