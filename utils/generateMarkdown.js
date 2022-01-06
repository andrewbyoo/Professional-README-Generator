const pulledData = require('../index.js')

// TODO: Add change the link so that the user can choose a badge color once a badge color question is added to the index.js
// Creates a license badge that links to the license file in the repo. If there is no license, return an empty string.
const renderLicenseBadge = license => (license != '') ? '[![license](https://img.shields.io/badge/license-' + license + '-blue)](./LICENSE)' : ''

// Returns the license table of contents link. If there is no license, returns an empty string.
const renderLicenseLink = license => (license != '') ? '- [License](#license)' : ''

// Returns license section header. If there is no license, return an empty string
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
