<h1 align=center>README GENERATOR</h1>

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

------

<!--TOC-->

------

## Links

<a href="https://github.com/RAMulc/README_Generator/blob/main/demo/ReadmeDemo.webm">Video Demo</a>
<br>
<a href="https://github.com/RAMulc/README_Generator/blob/main/demo/SampleREADME.md">Sample README</a>
<br>
<a href="https://github.com/RAMulc/README_Generator">Repo</a> 

## Description

A command line readme generator. 

## Installation
Run npm install to install inquirer and its dependencies.

## Usage
- run 'node index.js' at the command line.

- Follow the prompts at the command line:

  - *Please enter the path to your working directory*: This must be a valid path to a project directory;

  - *What is the project TITLE?* Enter a title for your README;

  - *Enter a DESCRIPTION of the project.* Enter a description for the project;

  - *Enter INSTALLATION instruction(s).* Enter installation instructions. (Recursive)

  - *Enter USAGE information.* Enter usage information. (Recursive)

  - *Select LICENSE option.* Select license from list. 

    - The list is not currently exhaustive, but is simple to add to.

  - *Enter CONTRIBUTION guideline(s).* Enter any contribution guidelines. (Recursive)

  - *Enter TEST instruction(s).* Enter any test instructions. (Recursive)

  - *Enter your GitHub USERNAME.* Enter user GitHub username.

  - *Enter the URL to your GitHub PROFILE.* Enter URL to user GitHub profile.

  - *Enter your EMAIL address.* Enter a valid email.

    - The email address will be checked for correct format.

  - *Enter any contact instruction(s).* Enter any additional contact information.

    

NOTE: 

1. Recursive replies with more than a single response will be added to the README as an unordered list.
2. If **package.json** exists in the working directory, default responses will be obtained from the file for TITLE, DESCRTIPTION and LICENSE. These may be overridden by the user.
3. A table of contents will be added to the README file, with links to the relevant sections.

<img src="https://github.com/RAMulc/README_Generator/blob/main/demo/Screenshot.png" style="zoom:50%;" />

------

## Contact
Visit my profile on GitHub: [RAMulc](<https://github.com/RAMulc>)

------

