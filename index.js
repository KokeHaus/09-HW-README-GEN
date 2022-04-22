// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateMarkdown.js');
const path = require('path');

promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'How does one install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How does one use your project?',
      },
    //   {
    //     type: 'input',
    //     name: 'license',
    //     message: 'What licensing does your project have?',
    //   },
      {
        type: 'input',
        name: 'contributors',
        message: 'How does one contribute to your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How does one test your project?',
      },
      {
        type: "checkbox",
        message: "What License did you use for this repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
     
    ]).then((response) => {
        return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
      });;
  };

promptUser();