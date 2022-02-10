// Packages included for this aplication
let inquirer = require('inquirer');

const fs = require('fs');

// array of question objects to collect data for README.md file
const questions = [
     {
      type: 'input',
      message: 'What is the name/title of your project?',
      name: 'title',
    },
    {
      type: 'list',
      message: 'did you use a license for this project? please select from the below choices.',
      choices: ['apache', 'boost', 'ISC', 'mozilla', 'none'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'please describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the instructions for installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to you use the app, site or program?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'user',
    },
    {
      type: 'input',
      message: 'What is your github url?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'did anyone else contribute to this repository? if yes, please write their names here.',
      name: 'contributor-names',
    },
    {
      type: 'input',
      message: 'did anyone else contribute to this repository? if yes, please write their github username here.',
      name: 'contributor-githubs',
    },
    {
      type: 'input',
      message: 'please link to badges here.',
      name: 'badges',
    },
    {
      type: 'input',
      message: 'What are the features of this repository?.',
      name: 'features',
    },
    {
      type: 'input',
      message: 'how can others contribute to this repository?',
      name: 'how-to-contribute',
    },
    {
      type: 'input',
      message: 'please explain any tests for your application with examples.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'would you like other developers to be able to conact you with questions? if yes please provide a preferred contact method below.',
      name: 'question',
    },

  ];
 

// TODO: Create a function to write README file
function writeToFile(questions, answers) {
  renderLicenseBadge(license); 

  fs.generateMarkdown(answers.title, license , answers.description, answers.installation, answers.usage, answers.user, answers.github, answers.contributorNames, answers.contributorGithubs, answers.features, answers.howToContribute, answers.tests, answers.question, answers.email ); {

}
}

// TODO: Create a function to initialize app
function init() { 

  inquirer.prompt(questions, answers).then(writeToFile);
}

// Function call to initialize app
init();
