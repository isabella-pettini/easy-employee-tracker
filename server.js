// Dependencies
// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table')
// const Connection = require('mysql2/typings/mysql/lib/Connection');

// const PORT = process.env.PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '@ss$Dr@Y&sLzj9Yr',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(function (err){
  if (err) {
    console.log(err);
    return;
  }
});

// Inquirer prompts for asking what action
employeeApp = () => {
  inquirer.prompt([
    {
      name: 'startMenu',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee Role']
    }
  ]).then((response) => {
      switch (response.startMenu) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add A Department':
          addADepartment();
          break;
        case 'Add A Role':
          addARole();
          break;
        case 'Add An Employee':
          addAnEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          console.log('Thank you. Goodbye.')
          return;
        default:
          break;
      }
  })
};

// View All Departments
viewAllDepartments = () => {
  connection.query(`SELECT * FROM department ORDER BY department_id ASC;`, (err, res) => {
    if (err) throw err;
    console.table( res);
    startApp();
})
};

// View All Roles
viewAllRoles = () => {
  connection.query(`SELECT role.role_id, role.title, role.salary, department.department_name, department.department_id FROM role JOIN department ON role.department_id = department.department_id ORDER BY role.role_id ASC;`, (err, res) => {
      if (err) throw err;
      console.table('\n', res, '\n');
      startApp();
  })
};

// View All Employees


// Add A Department

// Add A Role

// Add an Employee

// Update Employee Role