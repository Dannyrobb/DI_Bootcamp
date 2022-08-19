--Basic Select Statement
--1
SELECT first_name AS "First Name", last_name AS "Last Name" FROM public.employees
ORDER BY employee_id ASC ;

--2
SELECT DISTINCT department_id FROM departments;

--3
SELECT * FROM employees ORDER BY first_name DESC;

--4
SELECT first_name, last_name, salary, salary/15 AS PF FROM employees;

--5
SELECT employee_id,first_name, last_name FROM employees ORDER BY salary DESC;

--6
SELECT SUM(salary) FROM employees;

--7
SELECT MAX(salary), MIN(salary) FROM employees;

--8
SELECT AVG(salary) FROM employees;

--9
SELECT COUNT(*) from employees;

--10
SELECT UPPER(first_name) from employees;

--11
SELECT LEFT(first_name, 3) from employees;

--12
SELECT CONCAT(first_name,' ', last_name) AS "FullName" FROM employees;

--13
SELECT first_name, last_name, LENGTH(CONCAT(first_name, last_name)) AS "FullNameLength" FROM employees;

--14
SELECT * FROM employees WHERE first_name LIKE '%[0-9]%';

--15 
SELECT * FROM employees ORDER BY employee_id ASC LIMIT 10;

-- Restricting And Sorting

--1 
SELECT first_name ,last_name,salary FROM employees WHERE 10000<salary AND salary<15000;

--2
SELECT first_name, last_name, hire_date FROM employees WHERE (EXTRACT (YEAR FROM hire_date)= 1987);

--3
SELECT * FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

--4
SELECT employees.last_name ,employees.salary,jobs.job_title FROM jobs
INNER JOIN employees
ON jobs.job_id=employees.job_id
WHERE jobs.job_title <>'Programmer'
AND jobs.job_title <>'Shipping Clerk' ;

--5
SELECT last_name from employees 
WHERE LENGTH(last_name) = 3;

--6
SELECT last_name FROM employees WHERE SUBSTRING(last_name,3,1)= 'e';

--7
SELECT job_title FROM jobs WHERE EXISTS (SELECT job_id FROM employees WHERE 
employees.job_id = jobs.job_id);

--8
SELECT * FROM employees
WHERE last_name = 'Jones' 
OR last_name = 'King' 
OR last_name = 'Blake' 
OR last_name = 'Scott' 
OR last_name = 'Ford';
