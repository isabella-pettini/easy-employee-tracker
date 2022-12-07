USE employees_db;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");

INSERT INTO roles (title, department_id, salary) VALUES ("Sales Lead, 1, 100000");
INSERT INTO roles (title, department_id, salary) VALUES ("Salesperson, 1, 80000");
INSERT INTO roles (title, department_id, salary) VALUES ("Lead Engineer, 2 150000");
INSERT INTO roles (title, department_id, salary) VALUES ("Software Engineer, 2, 120000");
INSERT INTO roles (title, department_id, salary) VALUES ("Account Manager, 3, 160000");
INSERT INTO roles (title, department_id, salary) VALUES ("Accountant, 3, 125000");
INSERT INTO roles (title, department_id, salary) VALUES ("Legal Team Lead, 4, 250000");
INSERT INTO roles (title, department_id, salary) VALUES ("Lawyer, 4, 190000");

INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Michael", "Scott", 1, 0);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Jim", "Halpert", 1, 1);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Dwight", "Schrute", 2, 0);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Andy", "Bernard", 2, 3);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Angela", "Martin", 3, 0);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Oscar", "Martinez", 3, 5);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Toby", "Flenderson", 4, 0);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ("Holly", "Flax", 4, 7);