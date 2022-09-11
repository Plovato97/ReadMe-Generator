// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} 

  ## https://github.com/${data.Username}/${data.title}
  # Description
  ${data.description}
  # Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Test](#tests)
  * [Questions](#questions)
  # Installation
  ### The following necessary dependencies must be installed to run the application
  * ${data.dependencies}
  # Usage
  ### Please note you need the following information to use this application. - ${data.usage}
  # License 
  This Project is licensed under the ${data.license} license.
  # Contribution
  ## Contributor(s): ${data.contributing}
  # Tests
  ### The following is needed to run the test
  * ${data.command}
  # Questions
  ### If you have any questions about the repo, open an issue or contact ${data.email} 
`
};

module.exports = generateMarkdown;
