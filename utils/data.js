// generatemarkdown built into Data object
const generateMarkdown = require("./generateMarkdown.js");

// Data store
const Data = function () {
    this.name = "";
    this.description = "";
    this.installation = [];
    this.usage = [];
    this.license = "";
    this.contributing = [];
    this.tests = [];
    this.githubUserName = "";
    this.gitHubProfile = "";
    this.email = "";
    this.contact = [];
    // generate mardown text
    this.generateMarkdownFile = function() {
        return generateMarkdown(this);
    }
    // Display the data to the screen
    this.consoleLogProps = function () {
        console.log("Name: ", this.name);
        console.log("Description: ", this.description);
        console.log("Installation: ", this.installation);
        console.log("Usage: ", this.usage);
        console.log("License: ", this.license[0]);
        console.log("Contributing: ", this.contributing);
        console.log("Tests: ", this.tests);
        console.log("GitHubUserName: ", this.githubUserName);
        console.log("GitHubProfile: ", this.gitHubProfile);
        console.log("email: ", this.email);
        console.log("Contact: ", this.contact);
    }
    // Allow the properties to be updated by making use of their names as string values
    this.assignToProperty = function (propName, propValue) {
        switch (propName) {
            case "name":
                this.name = propValue;
                break;
            case "description":
                this.description = propValue;
                break;
            case "installation":
                this.installation = [...propValue];
                break;
            case "usage":
                this.usage = [...propValue];
                break;
            case "license":
                this.license = propValue;
                break;
            case "contributing":
                this.contributing = [...propValue];
                break;
            case "tests":
                this.tests = [...propValue];
                break;
            case "githubUserName":
                this.githubUserName = propValue;
                break;
            case "gitHubProfile":
                this.gitHubProfile = propValue;
                break;
            case "email":
                this.email = propValue;
                break;
            case "contact":
                this.contact = [...propValue];
                break;
            default:
                console.error("No such property: ", propName);
                break;
        }
    }
}

module.exports = Data;