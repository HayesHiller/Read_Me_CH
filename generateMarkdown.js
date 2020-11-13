// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
    let draftToC = `## Table of Contents`;

    if (userResponses.installation !== '') { draftToC += `
    * [Installation](#installation)` };

    if (userResponses.usage !== '') { draftToC += `
    * [Usage](#usage)` };

    if (userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };

    if (userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };

    // Generate markdown for the top portions 
    let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  `

    

    }
  

  module.exports = generateMarkdown;