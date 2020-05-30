// Questions constructor for using Inquirer method.
function Questions(type, message, name) {
    this.type = type;
    this.message = message;
    this.name = name;
};
// Questions will be loaded into an empty array. 
let Contents = [];
const badge = new Questions("input", "Enter at least one badge name: ", "Badge");
const title = new Questions("input", "Enter your project title: ", "Title");
const description = new Questions("input", "Enter project description: ", "Description");
const toc = new Questions("input", "Enter Table of Contents: ", "ToC");
const install = new Questions("input", "Enter your required installation(s): ", "Installation");
// install.prototype.default = "npm i";
const usage = new Questions("input", "Enter reason for usage: ", "Usage");
const license = new Questions("input", "Enter the license this project is under: ", "License");
const contributing = new Questions("input", "Enter contributers: ", "Contribute");
const tests = new Questions("input", "What are the tests you will run: ", "Tests");
const usernameAsk = new Questions("input", "Enter your name: ", "Username");
const emailAsk = new Questions("input", "Enter your email address: ", "Email");
const githubAsk = new Questions("input", "Enter your Github username: ", "Github");
// Pushing objects with our question content into an array.
Contents.push(badge, title, description, toc, install, 
    usage, license, contributing, tests, usernameAsk, emailAsk, githubAsk);

// Exporting Contnets.
module.exports =  Contents;
