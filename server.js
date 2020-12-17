var mysql = require("mysql");
var inquirer = require("inquirer");
const { rootCertificates } = require("tls");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: root,
    password: "TheDoctor14!",
    database: "employee_db"
})