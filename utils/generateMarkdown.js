const renderUserStory = userStory => (userStory != '') ? '\n## User Story\n\`\`\`\n' + userStory + '\n\`\`\`' : ''

const renderCreditsLink = credits => (credits != '') ? '\n- [Credits](#credits)' : ''

const renderCreditsSection = credits => (credits != '') ? '\n## Credits\n' + credits : ''

// TODO: Add change the link so that the user can choose a badge color once a badge color question is added to the index.js
// Creates a license badge that links to the license file in the repo. If there is no license, return an empty string.
const renderLicenseBadge = license => (license != '') ? '[![license](https://img.shields.io/badge/license-' + license + '-blue)](./LICENSE)' : '';

// Returns the license table of contents link. If there is no license, returns an empty string.
const renderLicenseLink = license => (license != '') ? '\n- [License](#license)' : ''

// Returns license section header. If there is no license, return an empty string
const renderLicenseSection = license => (license != '') ? '\n## License' : ''

const renderFeaturesList

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
## Description
${data.description}
${renderUserStory(data.userStory)}

## Table of Contents
- [Installation](#installation)
- [Deployed Web Visual](#deployed-web-visual)${renderCreditsLink(data.credits)}${renderLicenseLink(data.license)}
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation
To get the app on your local machine:
Click on the code button on the repo.
Copy the HTTPS or SSH link.
Run the command \`git clone\` with the copied HTTPS or SSH link.
${data.installation}

## Deployed Web Visual
${data.visual}
![alt text](enter committed web visual file path here)
${renderCreditsSection(data.credits)}${renderLicenseSection(data.license)}${renderLicenseBadge(data.license)}


## Features
${renderFeaturesList(data.features)}

## How to Contribute
${data.contact}

`;
}

module.exports = { generateMarkdown };


// Features code
// ${renderFeatureList(data.features)}
