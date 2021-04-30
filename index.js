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
            // Validate the property to confirm the user has provided a value.
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
            message: 'What is contained in your app?',
            name: 'TableofContents',
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
            type: 'input',
            message: 'What license does your app use?',
            name: 'License',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
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

).then((
    response
) => {
    const template = `# ${response.Title}
## Description
${response.Description}    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
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
        
## Contact the Author
GitHub: ${response.git}\r\n
Email: ${response.Email}`;
    createNewFile(response.Title, template);
});

function createNewFile(fileName, template) {
    fs.writeFile(`./${fileName}.md`, template, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README.md has been generated.');
    })
}

