const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const asyncWrite = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your application?",
        },
        {
            type: "input",
            name: "Description",
            message: "Write a brief description of what your application does:",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required for installing your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide some brief instructions on how to use your application:",
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "MIT",
                "MPL-2.0",
                "EPL-1.0",
                "N/A",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "If you would like others developers to contribute specify your guidelines on how to do so here:",
        },
        {
            type: "input",
            name: "Tests",
            message: "Please list any test instructions for your program:",
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email as a way to contact you if the user has any questions: "
        },
    ])

    .then((response, error) => {

        let {
            title,
            Description,
            installation,
            usage,
            license,
            contributing,
            Tests,
            username,
            email,
        } = response

        asyncWrite("README.md",
            `# ${title}

${getBadge(license)}           

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
${Description}

## Installation
${installation}
## Usage
${usage}

## License
For more information about the license, please click on the link below.

-[License](https:opensource.org/licenses/${license})

## Contributing
${contributing}

## Tests
${Tests}

## Questions
* GitHub:[ ${username}](https://github.com/${username})
For any questions please contact me at my email: ${email}`)

        function getBadge(badge) {
            switch (badge) {
                case "Apache-2.0":
                    return (`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`);
                    break;
                case "BSD-3-Clause":
                    return (`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`);
                    break;
                case 'MIT':
                    return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`);
                    break;
                case 'MPL-2.0':
                    return (`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`);
                    break;
                case 'EPL-1.0':
                    return (`[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`);
                    break;
                case 'N/A':
                    return (``);
                    break;
            }
        }

        if (error) {
            return console.log(err);
        }
        console.log("Your README File was created successfully!");
    });

