// Prep the data to form an unordered list when the data length exceeds 1
function makeList(dataArray) {
  if (dataArray.length > 1) {
    let arrayOut = [];
    dataArray.forEach(ele => {
      // set the array to dispaly as unordered list in the readme by adding '-'
      arrayOut.push("- " + ele)
    })
    return arrayOut;
  }
  return dataArray;
}

// function to generate markdown for README
function generateMarkdown(data) {
  // join the arrays with linebreaks 
  const installation = makeList(data.installation).join("\n");
  const usage = makeList(data.usage).join("\n");
  const contributing = makeList(data.contributing).join("\n");
  const tests = makeList(data.tests).join("\n");
  const contact = makeList(data.contact).join("\n");

  // make use of html tags and markdown to display the data in a pleasing way
  const mdContent = `<h1 align=center>${data.name}</h1>

${data.license[1]}

------

[TOC]

------

## Description
${data.description} 

## Installation
${installation} 

## Usage
${usage} 

## License
This application is covered under the [${data.license[0]}]${data.license[2]}.

## Contributing
${contributing} 

## Tests
${tests} 

------

## Contact
Visit my profile on GitHub: [${data.githubUserName}](<${data.gitHubProfile}>)
Send me an email: <${data.email}>

${contact}

------

`

  return mdContent;
}

// export for use elsewhere
module.exports = generateMarkdown;

