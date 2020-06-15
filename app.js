const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const mainQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is this employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    },
    {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    }
]


const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is this Manager's Office Number?"
    },
    {
        type: "input",
        name: "addone",
        message: "Would you like to add another employee?(Y/N)"
    },
]


const engineerQuestion = [
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's GitHub name?"
    },
    {
        type: "input",
        name: "addone",
        message: "Would you like to add another employee?(Y/N)"
    },
]


const internQuestion = [
    {
        type: "input",
        name: "school",
        message: "What school is this Intern attending?"
    },
    {
        type: "input",
        name: "addone",
        message: "Would you like to add another employee?(Y/N)"
    },
]

async function init() {
    try {

        let isDone = false;
        let employeeArray = [];


        const data = await inquirer.prompt(mainQuestions);

        switch (data.role) {
            case "Manager":

                const dataM = await inquirer.prompt(managerQuestion)

                employeeArray.push(new Manager(data.name, data.id, data.email, data2.officeNumber));
                console.log(employeeArray)
                break;

            case "Engineer":

                const dataE = await inquirer.prompt(engineerQuestion)

                employeeArray.push(new Engineer(data.name, data.id, data.email, dataE.officeNumber));

                break;

            case "Intern":

                const dataI = await inquirer.prompt(internQuestion)

                employeeArray.push(new Intern(data.name, data.id, data.email, dataI.officeNumber));

                break;
        }

    } catch (err) {
        console.log(err)
    }
}

init();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
