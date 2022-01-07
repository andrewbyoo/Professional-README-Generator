// If any of the prompts that pertain to the follow functions were left blank, return an empty string
// Returns user story in a code block
const renderUserStory = userStory => (userStory != '') ? '\n\n## User Story\n\`\`\`\n' + userStory + '\n\`\`\`' : ''

// Returns additional installation instructions
const renderAdditionalInstructions = installation => (installation != '') ? '\n' + installation : ''

// Returns license badge
const renderLicenseBadge = (license, badgeColor) => (license != 'Unlicensed') ? '[![license](https://img.shields.io/badge/license-' + license + '-' + badgeColor + ')](./LICENSE)' : ''

// Returns the license table of contents link
const renderLicenseLink = license => (license != 'Unlicensed') ? '\n- [License](#license)' : ''

// Returns license section header and badge
const renderLicenseSection = license => (license != 'Unlicensed') ? '\n\n## License\nThis application is covered under the ' + license + ' license.' : ''

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

const renderContributing = contributing => (contributing) ? '\n\n## Contributing\nWhen contributing to this repository, please contact the owner through either opening an issue or emailing before making a change.\n\n### Pull Requests\n1. Update the README.md with details of the changes made.\n2. Contact another developer on the project to review your pull request.\n3. Merge the pull request after it has been reviewed and approved. If you do not have merge access, contact another developer to merge the pull request.' : ''

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license, data.badgeColor)}
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
To view more of my projects, you can visit my GitHub page at [${data.username}](https://github.com/${data.username}).
If you have questions, email me at [${data.email}](mailto:${data.email}).`;
}

module.exports = { generateMarkdown };
