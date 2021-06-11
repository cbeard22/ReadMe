const inquirer = require('inquirer');
const fs = require('fs');
//const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

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
            message: "Provide some brief instuctions on how to use your application:",
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "BSD-2-Clause",
                "ISC",
                "MIT",
                "MPL-2.0",
                "EPL-2.0",
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
            message: "Please enter your email as a way to contact you if the user has any quesitions: "
        },
    ])

.then(({
    title ="/x1b[30m",
    Description ="/x1b[30m",
    usage,
    license,
    contributing,
    Tests,
    username,
    email,
    
})=>{
    const template = 
    `# ${title}

    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
    
    ## Description
    ${Description}

    ## Usage
    ${usage}

    ## License
        For more information about the license, please click on the link below.

    -[License](http:opensource.org/licenses/${license})

    ## Contributing
    ${contributing}

    ## Tests
    ${Tests}

    ## Questions
    * GitHub: ${username}
    For any questions please contact me at my email: ${email}`
    
    createNewFile(title,template);
}
);

function createNewFile(fileName,data){

    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log("Your ReadMe file was created Successfully!")
    })
};

