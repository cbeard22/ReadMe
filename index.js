const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "UTF-8">
<meta http-equiv="X-UA-Compatible" contant="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Read Me</title>
</head>
<body>

</body>
</html>`;

inquirer
    .prompt([
        {
            type: "",
            name: "",
            message: "",
        }
    ])

.then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Your ReadMe was created successfully!")
    );
});