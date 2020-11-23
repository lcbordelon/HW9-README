// function to generate markdown for README
//if you name a question title, it will put it in. # adds an H1.
function generateMarkdown(data) {
  let draftToC = `## Table of Contents`;
  if (questions.applicationInstall !== "") {
    draftToC += `
  * [Installation](#installation)`;
  }

  if (questions.applicationUsage !== "") {
    draftToC += `
  * [Usage](#usage)`;
  }

  if (questions.applicationContr !== "") {
    draftToC += `
  * [Contributing](#contributing)`;
  }

  if (questions.applicationTest !== "") {
    draftToC += `
  * [Tests](#tests)`;
  }

  let draftMarkdown = `# ${data.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).`;

  return `# ${data.title}
Application Name
## ${data.applicationName}
Application Description
##${data.applicationDesc}
Table of Contents
Installation Instructions
##${data.applicationInstall}
Usage Information
##${data.applicationUsage}
Contribution Guidelines
##${data.applicationContr}
Test Instructions
##${data.applicationTest}

`;

  draftMarkdown += draftToC;

  draftMarkdown += `
  * [License](#license)`;

  let draftDev = `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${data.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${data.login}](${data.url})
  `;

  if (data.email !== null) {
    draftDev += `
  Email: ${data.email}
  `;
  }

  // Add developer section to markdown
  draftMarkdown += draftDev;
}

module.exports = generateMarkdown;
