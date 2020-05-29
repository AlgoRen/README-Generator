// Prompt user to ask for following questions. Use an object.
// One badge, project title, description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, Questions
const inquirer = require("inquirer");
const { Contents } = require('./structure'); // Descructured.
const fs = require("fs");
const util = require("util");



const asyncWriteFile = util.promisify(fs.writeFile);

async function makeReadMe() {
    try {
        const response = await inquirer.prompt(Contents);
        // basically the real writing of the file
        // works fine
        await asyncWriteFile("test.txt", JSON.stringify(response));
        // doesnt work
        // await asyncWriteFile("./Assets/README.md", JSON.stringify(response));
        console.log("Success!");
    }
    catch(error) {
        console.log(error)
    }
}

makeReadMe();
