// Node Modules.
const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer package to generate questions to user.
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the projects title?',
            name: 'Title',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'How would you describe your app?',
            name: 'Description',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'Installation',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'Usage',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'list',
            message: 'What license does your app use? Please choose one of the following: ',
            name: 'License',
            choices: ['The MIT License', 'GNU GPL v3', 'Apache 2.0', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'To whom does credit need to be assigned for this project?',
            name: 'Credits',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Are there any contributors to your app?',
            name: 'Contributors',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'Are there any tests for your app?',
            name: 'Tests',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'What is the author\'s GitHub username?',
            name: 'GitHub',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        },
        {
            type: 'input',
            message: 'How can the author be contacted?',
            name: 'Email',
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } },
        }
    ]
    // Template to display the README.md being created based on user input
).then((
    response
) => {
    console.log(response);
    // Generation of the License
    let badge;
    if (response.License === 'The MIT License') {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (response.License === 'GNU GPL v3') {
        badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (response.License === 'Apache 2.0') {
        badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else { badge = '' };
    const template = `# ${response.Title}
${badge}
## Description
    ${response.Description}    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Credits](#credits)
* [License](#license)
## Installation
    ${response.Installation}
## Usage
    ${response.Usage}
## Contributors
    ${response.Contributors}
## Credits
    ${response.Credits}
## License
    ${response.License}
## Tests
    ${response.Tests}
        
## Questions
GitHub: [${response.GitHub}](https://github.com/${response.GitHub}) \r\n
Email: [${response.Email}](https://${response.Email}) `;
    createNewFile(response.Title, template);
});
// Function generating the README.md
function createNewFile(fileName, template) {
    fs.writeFile(`./ ${fileName}.md`, template, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README.md has been generated.');
    })
}

