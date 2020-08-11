// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  
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
  ${data.license}

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

module.exports.generateMarkdown = generateMarkdown;
