const fs = require("fs");
const licenses = require("./licenses.js");

const licenseKeys = Object.keys(licenses);

// function to validate the email format entered
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// get the working directory from the user, check it is valid
const workingDirectory = [
    {
        type: 'input',
        name: 'work_directory',
        message: "Please enter the path to your working directory.",
        validate: function (value) {
            var pass = fs.existsSync(value);
            if (pass) {
                return true;
            }
            return 'Please enter a valid directory';
        },
    }
];

// for recusive questions, ask the user if they have additional input
const confirm = [
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Add another entry (Enter for YES)?',
        default: true,
    },
]

// core questions to get necessary data for the README file
// recursive is additional to allow the user to add multiple lines 
// for selected categories. An alternative would be the use of 
// the 'editor' type
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the project TITLE?",
        default: "",
        isRecursive: false
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a DESCRIPTION of the project.",
        default: "",
        isRecursive: false
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter INSTALLATION instruction(s).",
        isRecursive: true
    },
    {
        type: 'input',
        name: 'usage',
        message: "Enter USAGE information.",
        isRecursive: true
    },
    {
        type: 'list',
        name: 'license',
        message: "Select LICENSE option.",
        default: Object.keys(licenses)[0],
        choices: Object.keys(licenses),
        filter: function(val) {
            return licenses[val];
        },
        isRecursive: false
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Enter CONTRIBUTION guideline(s).",
        isRecursive: true
    },
    {
        type: 'input',
        name: 'tests',
        message: "Enter TEST instruction(s).",
        isRecursive: true
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: "Enter your GitHub USERNAME.",
        isRecursive: false
    },
    {
        type: 'input',
        name: 'gitHubProfile',
        message: "Enter the URL to your GitHub PROFILE.",
        isRecursive: false
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your EMAIL address.",
        validate: function (value) {
            var pass = validateEmail(value);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email';
        },
        isRecursive: false
    },
    {
        type: 'input',
        name: 'contact',
        message: "Enter any contact instruction(s).",
        isRecursive: true
    }

];

// does the user want to view their inputs?
const viewInputs = [
    {
        type: 'confirm',
        name: 'view_inputs',
        message: "View your inputs (Enter for YES)?",
    }
];

// does the user want to make the readme.nd file?
const submitInputs = [
    {
        type: 'confirm',
        name: 'submit_inputs',
        message: "Make readme.md from your inputs (Enter for YES)?",
    }
];

// export for use elsewhere
module.exports = {
    workingDirectory: workingDirectory,
    questions: questions,
    confirm: confirm,
    viewInputs: viewInputs,
    submitInputs: submitInputs,
    licenseKeys: licenseKeys
};