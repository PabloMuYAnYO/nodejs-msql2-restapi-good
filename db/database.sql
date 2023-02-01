DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee (
    id_employee INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    employee_name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);

-- FOR EXAMPLE
INSERT INTO employee(employee_name, salary);
VALUES("Pepito", 4300);
VALUES("Eugenia", 4900);