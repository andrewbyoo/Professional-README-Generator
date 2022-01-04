// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description


## User Story
\`\`\`

\`\`\`

## Table of Contents
- [Installation](#installation)
- [Deployed Web Visual](#deployed-web-visual)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation


## Deployed Web Visual

![alt text](enter committed web visual file path here)

## Credits


## License


## Features


## How to Contribute


## Tests

`;
}

module.exports = generateMarkdown;
