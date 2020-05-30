// Prompt user to ask for following questions. Use an object.
// One badge, project title, description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, Questions
const inquirer = require("inquirer");
const Contents = require('./structure'); 
const fs = require("fs");
const util = require("util");

// A function that is to handle the results of the prompting of Contents.
function structureResponse (response) {
    let {Title, Username, Github, Badge, Description, ToC, Installation, 
    Usage, License, Contribute, Tests, Email} = response; // Descructured.
    return `# Generated ReadMe File for ${Username} @https://github.com/${Github}
*Written file ${Title}*
## Badge: ${Badge}
## Title: ${Title}
## Description: ${Description}
## ToC: ${ToC}
## Installation: ${Installation}
## Usage: ${Usage}
## License: ${License}
## Contribute: ${Contribute}
## Tests: ${Tests}
## Name: ${Username}
## Email: ${Email}
## GitHub: ${Github}
![](completedgif.gif)`
}; 

const asyncWriteFile = util.promisify(fs.writeFile);

async function makeReadMe() {
    try {
        const response = await inquirer.prompt(Contents);
        // basically the real writing of the file
        await asyncWriteFile("README.md", structureResponse(response));
        console.log("Success!");
    }
    catch(error) {
        console.log(error)
    }
}

makeReadMe();
