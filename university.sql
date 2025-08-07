create database university;
use university;

-- Create the department's table 
create table departments(
    id int primary key,
    name varchar(100),
    department_name varchar(100)
);

-- Create the employee's table
create table employees(
    id int primary key,
    employee_name varchar(100),
    departmentID int,
    foreign key (departmentID) references departments(id)
    on delete cascade
    on update cascade
);

-- Insert three records in each of the employees and the department's tables
insert into departments(id, name, department_name) 
values (1, "IT", "Information Technology"),
(2, "AI/ML", "Artificial Intelligence and Machine Learning"), 
(3, "CS", "Computer Science");

insert into employees(id, employee_name, departmentID) 
values (100, "Jake", 1),
(101, "John", 1),
(102, "Tommy", 2),
(103, "Anne", 2),
(104, "Mikel", 3),
(105, "Lauren", 3);

-- Alter the employee's table and add the column salary to it. Make sure that the value is not null
alter table employees
add column salary double not null;

-- Delete all the departments in the database, and make sure that you have deleted the corresponding employees from the employee's table
-- used cascade in employees table, hence employee details gets deleted too.
delete from departments;

-- Show the result of the two tables in your console to make sure of your steps
select * from departments;
select * from employees;


