// Prompt user to ask for following questions. Use an object.
// One badge, project title, description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, Questions
const inquirer = require("inquirer");
const Contents = require('./structure'); // Descructured.
const fs = require("fs");
const util = require("util");

// A function that is to handle the results of the prompting of Contents.
function structureResponse (response) {
    let newContents = response
    console.log(newContents)
    console.log(JSON.stringify(newContents))
    console.log(newContents.Badge);
    return `# Generated ReadMe File for ${newContents.Username} @https://github.com/${newContents.Github}
*Written file ${newContents.Title}*
## Your badge: ${newContents.Badge}
## Your title: ${newContents.Title}`

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
