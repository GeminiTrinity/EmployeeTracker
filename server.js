var connection = require("./database/connection");
var inquirer = require("inquirer");
require("console.table");
var questions = require("./database/questions.js")

function askFirstQuestion() {
    inquirer.prompt(questions.firstQuestion).then(function (answer) {
        switch(answer.intro) {
            case "View All Employees":
                viewAllEmployees();
            break;
            case "Add Employee":
                addEmployee();
            break;
            case "Remove Employee":
                removeEmployee();
            break;
            case "Update Employee Role":
                updateEmployeeRole();
            break;
        }
    })
};

askFirstQuestion()

function viewAllEmployees() {
    connection.query(
        `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
        function (err, result) {
            if (err) throw err;
            console.table(result);
            askFirstQuestion();
        }
    )
}

function addEmployee() {
    inquirer.prompt(questions.addEmployeeQuestion).then(function (answer) {
        if ((answer.employeeManager = "undefined")) {
            answer.employeeManager = 0;
          }
    connection.query(
        "INSERT INTO `employeetracker`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('" + answer.firstName + "', '" + answer.lastName + "', '" + answer.employeeRole + "','" + answer.employeeManager + "');",
            function (err, result) {
                if (err) throw err;
                console.table(result);
                askFirstQuestion();
            }
        )
    })
}

function removeEmployee() {
    connection.query(
    `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
    function (error, result) {
        console.table(result);
        inquirer.prompt(questions.removeEmployee).then(function (answer) {
            result.forEach((element) => {
                employeeId = parseInt(answer.removeEmployee);
                if (element.id === employeeId) {
                    connection.query(
                        `DELETE from employeetracker.employee where id = ${employeeId}`,
                        askFirstQuestion()
                    );
                }
            });
    });
    }
);
}   
    
function updateEmployeeRole() {
    connection.query(
        `SELECT id, first_name, last_name, role_id, manager_id FROM employeetracker.employee`,
            function (error, result) {
                console.table(result);
                inquirer.prompt(questions.updateEmployeeRole).then(function (answer) {
                    connection.query(
                        "UPDATE `employeetracker`.`employee` SET `role_id` = '" + answer.newRole +  "' WHERE (`id` = '"+ answer.updateEmployeeRole +"');",
                        function (error, result) {
                            if(error) console.log(error)
                            askFirstQuestion()
                        }
                    )
                }
            );
        }
    )
}