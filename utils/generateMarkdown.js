const pulledData = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => (license != '') ? '[![license](https://img.shields.io/badge/license-' + license + '-blue)](./LICENSE)' : ''

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => (license != '') ? '- [License](#license)' : ''

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => (license != '') ? '## License' : ''

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
## Description


## User Story
\`\`\`

\`\`\`

## Table of Contents
- [Installation](#installation)
- [Deployed Web Visual](#deployed-web-visual)
- [Credits](#credits)
${renderLicenseLink()}
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation


## Deployed Web Visual

![alt text](enter committed web visual file path here)

## Credits


${renderLicenseSection()}
${renderLicenseBadge()}


## Features


## How to Contribute


`;
}

module.exports = generateMarkdown(pulledData);
