DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee (
    id_employee INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    employee_name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);

-- FOR EXAMPLE
INSERT INTO employee VALUES;
    (1,"Pepito", 4300),
    (2,"Eugenia", 4900),
    (3,"Javi", 1900),
    (4"Ana", 5300),
    (5,"Eugenia", 2500)