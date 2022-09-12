// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![Github License](https://img.shields.io/badge/license-MIT-blue.svg)'
  } else if (license === 'APACHE 2.0') {
    badge = '![Github License](https://img.shields.io/badge/license-Apache%202.0-blue'
  } else if (license === 'GPL v3.0') {
    badge = '![Github License](https://img.shields.io/badge/license-GPL%20v3.0-blue)'
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'APACHE 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  }else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else (
    licenseLink = ''
  )
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  }else {
    `License: ${license}`
  }
  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  #${data.title} ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}


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
  ###${renderLicenseLink(data.license)}
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
