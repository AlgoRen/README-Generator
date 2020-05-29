// Questions constructor for using Inquirer method.
function Questions(type, message, name) {
    this.type = type;
    this.message = message;
    this.name = name;
};
// Questions will be loaded into an empty array. 
let Contents = [];
const username = new Questions("input", "Enter at least one badge name: ", "Badge");
const title = new Questions("input", "Enter your project title: ", "Title");
const description = new Questions("input", "Enter project description: ", "Description");
const toc = new Questions("input", "Enter Table of Contents: ", "ToC");
const install = new Questions("input", "You're required installation: ", "Installation");
// install.prototype.default = "npm i";
const usage = new Questions("input", "Enter reason for usage: ", "Usage");
const license = new Questions("input", "Enter at least one badge name: ", "License");
const contributing = new Questions("input", "Enter contributers: ", "Contribute");
const tests = new Questions("input", " : ", "Badge");
const readMeQuestions = new Questions("input", ": ", "Questions");
// Pushing objects with our question content into an array.
Contents.push(username, title, description, toc, install, 
    usage, license, contributing, tests, readMeQuestions);

// Exporting Contnets.
module.exports = { Contents };
