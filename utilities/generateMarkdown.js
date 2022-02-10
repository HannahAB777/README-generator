// TODO: Create a function that returns a license badge plus name and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case apache:
      license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      break;
    case boost:
      license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

      break;
    case ISC:
      license = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case mozilla:
      license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case none:
      license = "";
      break;
  }
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, license, description, installation, usage, user, github, contributorNames, contributorGithubs, features, howToContribute, tests, questions, email) {
  return `# ${title}

  ## License
  
  ${license}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  | Table of Contents|
  | ----------- |
  |[Installation](#installation) |
  |[Usage](#usage)|
  |[Credits](#credits)|
  |[License](#license)|
  |[Features](#features)|
  |[How to confribute](#how-to-contribute)|
  |[Tests](#how-to-contribute)|
  |[Questions](#questions)|
   
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}
  
  ## Credits

  ${user}
  [${github}](${github})
  ${contributorNames}
  |${contributorGithubs}|(${contributorGithubs})
  
  ## Features
  
  ${features}

  ## How to Contribute

  ${howToContribute}
    
  ## Tests

  ${tests}
    
  ## Questions

  ${questions}
  For any questions regarding this repository please contact me below,
  ${user}
  |${github}|(${github})
  |${email}|(${email})
  `;
}

module.exports = generateMarkdown;
renderLicenseBadge(license);


