const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/generateTeam.js");

teamArray = [];

function runProgram() {

function addTeamMember() {
    inquirer
         .prompt([
        {
            type: "list",
            name: "role",
            message: "What is the team member's role?",
            choices: ["Manager", "Engineer", "Intern", "None"],
        },
        ])
        .then((answers) => {
        switch (answers.role) {
            case "Manager":
            addManager();
            break;
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            case "Employee":
            addEmployee();
            break;
            default:
            buildTeam();
        }
        });
    }

function addManager() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
        ])
        .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        teamArray.push(manager);
        addTeamMember();
        });
    }

function addEngineer() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
        },
        ])
        .then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        teamArray.push(engineer);
        addTeamMember();
        });
    }

function addIntern() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
        ])
        .then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
        );
        teamArray.push(intern);
        addTeamMember();
        });
    }

function addTeamMember() {
    inquirer
       .prompt([
        {
            type: "list",
            name: "role",
            message: "What is the team member's role?",
            choices: ["Manager", "Engineer", "Intern", "None"],
        },
        ])
        .then((answers) => {
        switch (answers.role) {
            case "Manager":
            addManager();
            break;
            case "Engineer":
            addEngineer();
            break;
            case "Intern":
            addIntern();
            break;
            default:
            buildTeam();
        }
        }
    );
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, generateTeam(teamArray), "utf-8");
}

addTeamMember();

}

runProgram();