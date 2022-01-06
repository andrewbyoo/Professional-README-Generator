const renderUserStory = userStory => (userStory != '') ? '\n\n## User Story\n\`\`\`\n' + userStory + '\n\`\`\`' : ''

const renderAdditionalInstructions = installation => (installation != '') ? '\n' + installation : ''

const renderLicenseBadge = license => (license != '') ? '[![license](https://img.shields.io/badge/license-' + license + '-blue)](./LICENSE)' : ''

// Returns the license table of contents link. If there is no license, returns an empty string.
const renderLicenseLink = license => (license != '') ? '\n- [License](#license)' : ''

// TODO: Add change the link so that the user can choose a badge color once a badge color question is added to the index.js
// Returns license section header and badge. If there is no license, return an empty string.
const renderLicenseSection = license => (license != '') ? '\n\n## License\n[![license](https://img.shields.io/badge/license-' + license + '-blue)](./LICENSE) This application is covered under the ' + license + ' license.' : ''

const renderFeaturesLink = features => (features != '') ? '\n- [Features](#features)' : ''

const renderFeaturesList = features => {
  if (features != '') {
    const featurePrep = '\n\n## Features\n- ' + features;
    const featureList = featurePrep.replaceAll(' & ', '\n- ');
    return featureList;
  } else {
    return '';
  }
}

const renderContributing = contributing => (contributing) ? '\n\n## Contributing\n[link](./contributing.md)' : ''

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}${renderUserStory(data.userStory)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}${renderFeaturesLink(data.features)}
- [Contributing](#contributing)

## Installation
To get the app on your local machine:
Click on the code button on the repo.
Copy the HTTPS or SSH link.
Run the command \`git clone\` with the copied HTTPS or SSH link.${renderAdditionalInstructions(data.installation)}

## Usage
${data.visual}
![alt text](enter committed web visual file path here)${renderLicenseSection(data.license)}${renderFeaturesList(data.features)}${renderContributing(data.contributing)}

## Tests


## Questions
If you have questions, you can visit my GitHub page at [${data.username}](https://github.com/${data.username}) or email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = { generateMarkdown };
