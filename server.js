var inquirer = require("inquirer");
var cTable = require("console.table");

function askFirstQuestion() {
    inquirer.prompt(firstQuestion).then((answer) => {

        if(answer.firstQuestion === "View All Employees") {
            // display table of employees
        }

        else if(answer.firstQuestion === "Add Employee") {
            inquirer.prompt(addEmployeeQuestion)
        }

        else if(answer.firstQuestion === "Remove Employee") {
            inquirer.prompt(removeEmployee)
        }

        else if(answer.firstQuestion === "Update Employee Role")
            inquirer.prompt(updateEmployeeRole)
    })
}




const firstQuestion = [
    {
        name: "intro",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
        ]
    }
];

const addEmployeeQuestion = [
    {
        name: "first-name",
        type: "input",
        message: "What is the Employee's first name?"
    },
    {
        name: "last-name",
        type: "input",
        message: "What is the employee's last name?"
    },
    {
        name: "employee-role",
        type: "list",
        message: "What is the employee's role?",
        choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead"
        ]
    },
    {
        name: "employee-manager",
        type: "list",
        message: "Who is the employee's manager?",
        choices: [

        ]
    },
    {
        name: "employee-salary",
        type: "input",
        message: "What is the employee's salary?"
    }
];

const updateEmployeeRole = [
    {
        name: "update-employee-role",
        type: "list",
        message: "Which employee do you want to update?",
        choices: [

        ]
    },
    {
        name: "new-role",
        type: "list",
        message: "What is the employee's new role?",
        choices: [
            "Sales Lead",
            "Salesperson",
            "Lead Engineer",
            "Software Engineer",
            "Account Manager",
            "Accountant",
            "Legal Team Lead"
        ]
    }
];

askFirstQuestion();