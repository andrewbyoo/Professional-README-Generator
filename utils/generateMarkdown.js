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
${data.description}

## User Story
\`\`\`
${data.userStory}
\`\`\`

## Table of Contents
- [Installation](#installation)
- [Deployed Web Visual](#deployed-web-visual)
- [Credits](#credits)
${renderLicenseLink(data.license)}
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${data.installation}

## Deployed Web Visual
${data.visual}
![alt text](enter committed web visual file path here)

## Credits
${data.credits}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}


## Features
${renderFeatureList(data.features)}

## How to Contribute
${data.contact}

`;
}

module.exports = generateMarkdown(pulledData);
