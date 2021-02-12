var connection = require("./database/connection");
var inquirer = require("inquirer");
require("console.table");
var questions = require("./database/questions.js")

function askFirstQuestion() {
    inquirer.prompt(questions.firstQuestion).then(function (answer)) {
        switch(answer.intro) {
            case "View All Employees"
                viewAllEmployees();
            break;
            case "Add Employee"
                addEmployee();
            break;
            case "Remove Employee"
                removeEmployee();
            break;
            case "Update Employee Role"
                updateEmployeeRole();
            break;
        }
    };
}

function viewAllEmployees() {
    connection.query(

    )
}

function addEmployee() {
    connection.query(

    )
}

function removeEmployee() {
    connection.query(

    )
}

function updateEmployeeRole() {
    connection.query(
        
    )
}