// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title} 
  ![License Badge](https://img.shields.io/badge/License-${data.license}-Green)
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)

  ## Installation
      ${data.installation}

  ## Usage
      ${data.usage}

  ## License
  ${data.license} (c) ${data.name}
  See LICENSE.md for details.

  ## Contributing
  ${data.contributing}

  ## Test Instructions
  ${data.test}

  ## Questions
  For questions, reach out to me here:
  Github: https://github.com/${data.github}  
  Email: [${data.email}](mailto:${data.email})
  `;
}
/* 
  New function
  Find all instances where it is a digit followed by a . or an )
  Replace d. or d) with \n d. or \n d) if digit is not 1
*/

module.exports.generateMarkdown = generateMarkdown;
