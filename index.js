const inquirer = require("inquirer");
const fs = require('fs');
// const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the project about?',
      },
      {
        type: 'input',
        name: 'table of contents',
        message: 'Table of Contents',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What does a user need to install to run this app? ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this app used?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license does this app use?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this app?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What commands are used to test this app?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ])
    .then((data) => {
      const readmePage = generateMarkdown(data);
  
      fs.writeFile('README.md', readmePage, (err) =>
        err ? console.log(err) : console.log('Successfully created readme!')
      );
    });
}
init();

// TODO: Include packages needed for this application

// TODO: import the generateMarkdown function from utils/generateMarkdown.js

// TODO: Write code to get user input, generate markdown, and save it to a file.
