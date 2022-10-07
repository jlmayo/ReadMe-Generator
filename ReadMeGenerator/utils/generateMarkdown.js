const licenseLinks = require("./licenseLinks");


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //Creates section for and populates license badge and the rest of the ReadMe markdown follows.
  //Utilized template literal notation to insert data from prompt answers.
  data.licenseBadge = licenseLinks[data.license];
  
  return `# ${data.title}

  ${data.licenseBadge}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ### Installation

  ${data.installation}

  ### Usage

  ${data.usage}

  ### License
  ${data.license}

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.testing}

  ### Questions
   
  Questions? Contact me: ${data.email}.

  ### Credits

  Github: [${data.username}](${data.url})

  Demonstration: [See it here.](${data.video})
`;
}

module.exports = generateMarkdown;
