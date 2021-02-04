var inquirer = require("inquirer");
var cTable = require("console.table");

function askFirstQuestion() {
    inquirer.prompt(firstQuestion).then((answer) => {

        if(answer.firstQuestion === "View All Employees") {
            // display table of employees
        }

        else if(answer.firstQuestion === "View All Employees By Department") {
            // display table of employees w/ dept
        }
        
        else if(answer.firstQuestion === "View All Employees By Manager") {
            // display table of employees w/ manager
        }

        else if(answer.firstQuestion === "Add Employee") {
            inquirer.prompt(addEmployeeQuestion)
        }

        else if(answer.firstQuestion === "Remove Employee") {
            inquirer.prompt(removeEmployee)
        }

        else if(answer.firstQuestion === "Update Employee Role")
            inquirer.prompt(updateEmployeeRole)

        else(answer.firstQuestion === "Update Employee Manager")
            inquirer.prompt(updateEmployeeManager)
    })
}




const firstQuestion = [
    {
        name: "intro",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
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

const removeEmployee = [
    {
        name: "remove-employee",
        type: "list",
        message: "Which employee would you like to remove?",
        choices: [

        ]
    }
]

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

const updateEmployeeManager = [
    {
        name: "update-employee-manager",
        type: "list",
        message: "Which employee do you want to update?",
        choices: [

        ]
    },
    {
        name: "new-manager",
        type: "list",
        message: "Who is the employee's new manager?",
        choices: [

        ]
    }
];

askFirstQuestion();