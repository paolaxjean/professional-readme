// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.username}/${data.title}

  # Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  # Installation
  To run this application the listed dependencies must be installed

  # Usage
  ${data.usage} is needed in order to use this application.

  # License 
  This application is licensed under the ${data.license} license.


  # Contributing 
  List of contributors: ${data.contributing}

  # Tests
  The following is needed to run the test: ${data.test} 

  # Questions
  For more information about this repository, please contact ${data.username} at ${data.email}

`;
}

module.exports = generateMarkdown;

