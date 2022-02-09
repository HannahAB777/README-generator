// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, installation, usage, name, github, contributorNames, contributorGithubs, features, howToContribute, tests, questions, email ) {
  return `# ${title}

  ## License
  ${}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  | Table of Contents|
  | ----------- |
  |[Installation](#installation) |
  |[Usage](#usage)|
  |[Credits](#credits)|
  |[License](#license)|
  |[Badges](#badges)|
  |[Features](#features)|
  |[How to confribute](#how-to-contribute)|
  |[Tests](#how-to-contribute)|
  |[Questions](#questions)|
   
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}
  
  ## Credits

  ${name}
  [${github}](${github})
  ${contributorNames}
  |${contributorGithubs}|(${contributorGithubs})
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## Features
  
  ${features}

  ## How to Contribute

  ${howToContribute}
    
  ## Tests

  ${tests}
    
  ## Questions

  ${questions}
  For any questions regarding this repository please contact me below,
  ${name}
  |${github}|(${github})
  |${email}|(${email})
  `;
}

module.exports = generateMarkdown;
