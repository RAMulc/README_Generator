const fs = require("fs");
const util = require('util');
const inquirer = require('inquirer');

const Data = require("./utils/data.js");
const questions = require("./utils/questions.js");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

let folderSpec = "./";

// function to create a directory (folderspec) to store the readme.md file in
async function makeDirectory() {
    if (!fs.existsSync(folderSpec)) {
        await mkdir(folderSpec, function (err) {
            if (err) {
                console.error(err);
                return false;
            }
            else {
                return true;
            }
        })
    }
}

// function to write README file
async function writeToFile(fileName, data) {
    // Set file path at same directory level as index.js
    const fileWithRelPath = folderSpec + "/" + fileName;
    // Do not overwrite an existing file
    if (!fs.existsSync(fileWithRelPath)) {
        await writeFile(fileWithRelPath, data, "utf8");
    }
}

async function addDefaults() {
    // check if package.json exists - we can use some data for default values in the questions
    try {
        if (fs.existsSync(folderSpec + "/package.json")) {
            const data = await readFile(folderSpec + "/package.json", "utf8");
            const jsonData = JSON.parse(data);
            // Add data from package.json as default values to name, description and license
            questions.questions.forEach(question => {
                if (question.name === "name" &&
                    jsonData.hasOwnProperty("name")) {
                    question.default = jsonData.name.toUpperCase().replace(/_/g, " ");
                }
                else if (question.name === "description" &&
                    jsonData.hasOwnProperty("description")) {
                    question.default = jsonData.description;
                }
                else if (question.name === "license" &&
                    jsonData.hasOwnProperty("license") &&
                    questions.licenseKeys.indexOf(jsonData.license) !== -1) {
                    question.default = jsonData.license;
                }
            });
        }
    }
    catch (err) {
        // log the error but continue as the questions will still run without defaults
        console.error(err);
    }
}

// gather responses to questions and add to data for future use
async function getData(data) {
    try {
        for (const question of questions.questions) {
            if (question.isRecursive) {
                let output = [];
                let askQAgain = true;
                const rQuestion = [question, ...questions.confirm];
                while (askQAgain) {
                    const rQResponse = await inquirer.prompt(rQuestion)
                    output.push(rQResponse[question.name]);
                    askQAgain = rQResponse.askAgain;
                }

                data.assignToProperty(question.name, [...output]);
            }
            else {
                const qResponse = await inquirer.prompt(question);
                data.assignToProperty(question.name, qResponse[question.name]);
            }
        };
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
}

// function to initialize and run the program
async function init() {
    // get working directory from user
    const dirResponse = await inquirer.prompt(questions.workingDirectory);
    // generated readme will be placed into the working directory
    folderSpec = dirResponse.work_directory;
    
    // check if the readme.md file already exists in the folder, abort if true
    if (fs.existsSync(folderSpec + "/README.md")) {
        console.error(folderSpec + "/README.md already exists! Delete or rename this file before proceeding.");
        return;
    }

    // If possible add some default values to the questions from package.json
    await addDefaults();

    // initialise the data object to store input responses
    let readMeData = new Data();
    let success = false;

    // get the required data from the user
    success = await getData(readMeData);

    if (success) {
        // display the input data to the user - optional
        const vsResponse = await inquirer.prompt(questions.viewInputs);
        if (vsResponse.view_inputs) {
            readMeData.consoleLogProps();
        }

        // create the readme file - optional
        const ssResponse = await inquirer.prompt(questions.submitInputs);
        if (ssResponse.submit_inputs) {
            writeToFile("README.md", readMeData.generateMarkdownFile());
        }
    }
    else {
        console.log("Something went wrong!")
    }
}

// function call to initialize program
init();
