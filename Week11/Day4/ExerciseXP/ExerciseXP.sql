--Subqueries
--1
SELECT first_name, last_name FROM employees
WHERE salary > (SELECT salary FROM employees
 WHERE last_name ='Bull');

--2
SELECT first_name, last_name FROM employees
WHERE manager_id IN
(SELECT manager_id FROM employees WHERE department_id IN(
SELECT department_id from departments
WHERE location_id IN (SELECT location_id FROM locations WHERE country_id = 'US')));

--3
SELECT first_name, last_name 
FROM employees
WHERE job_id IN 
(SELECT job_id FROM jobs WHERE job_title ILIKE '%manager%');

--4
SELECT first_name, last_name
FROM employees
WHERE salary>( SELECT AVG(salary) FROM employees )

--5
SELECT first_name, last_name, salary 
FROM employees 
WHERE employees.salary = (SELECT min_salary
FROM jobs
WHERE employees.job_id = jobs.job_id);

--6
SELECT first_name, last_name 
FROM employees
WHERE job_id IN 
(SELECT job_id FROM jobs WHERE job_title not like '%supervisor%');

--7
SELECT first_name, last_name, salary , employee_id
FROM employees 
WHERE employees.salary > (SELECT min_salary/2 +max_salary/2
FROM jobs
WHERE employees.job_id = jobs.job_id);

--8 not done with subquery- did not understand why or how
select distinct max_salary 
from jobs
order by max_salary
DESC LIMIT 1 OFFSET 4; 

--9 not done with subquery-
select distinct min_salary 
from jobs
order by min_salary
asc LIMIT 1 OFFSET 3

--10
SELECT department_id, department_name 
FROM departments
WHERE department_id NOT IN (select department_id from employees)

--Joins
--1
SELECT locations.location_id,locations.street_address,
locations.city,locations.state_province,
countries.country_name,departments.department_id
from locations
INNER JOIN countries
ON countries.country_id=locations.country_id
INNER JOIN departments 
ON departments.location_id = locations.location_id;

--2
SELECT employees.first_name,employees.last_name,
departments.department_id,departments.department_name
FROM employees 
INNER JOIN departments
ON employees.department_id = departments.department_id
ORDER BY department_id;

--3
SELECT employees.first_name,employees.last_name,
jobs.job_title,departments.department_name,departments.department_id
FROM employees 
INNER JOIN jobs 
ON jobs.job_id=employees.job_id
INNER JOIN departments 
ON departments.department_id=employees.department_id
WHERE departments.location_ID
IN (SELECT location_id FROM locations WHERE city LIKE 'London');

--4
SELECT T1.employee_id , T1.last_name AS "Employee",
T2.employee_id , T2.last_name AS "Manager"
FROM employees T1 JOIN employees T2
ON T1.manager_id= T2.employee_id;

--5
SELECT employees.first_name,employees.last_name,employees.job_id, departments.department_id,departments.department_name
from employees
INNER JOIN departments ON departments.department_id=employees.department_id;

--6
SELECT employees.employee_id, jobs.job_title
FROM employees
INNER JOIN jobs on jobs.job_id = employees.job_id
INNER JOIN departments on departments.department_id = employees.department_id
WHERE departments.department_id = 90

--7
SELECT departments.department_name, employees.first_name, locations.city, jobs.job_title
FROM departments
INNER JOIN employees on departments.department_id=employees.department_id
INNER JOIN locations on departments.location_id=locations.location_id
INNER JOIN jobs on jobs.job_id=employees.job_id
WHERE employees.job_id in (select job_id from jobs where job_title ilike '%manager%')

--8
SELECT jobs.job_title, AVG(employees.salary) as average_salary
FROM jobs
INNER JOIN employees on jobs.job_id=employees.job_id
group by jobs.job_title;

--9
SELECT departments.department_name, employees.first_name,
employees.last_name,employees.hire_date, employees.salary
FROM departments
INNER JOIN employees ON employees.department_id = departments.department_id
INNER JOIN jobs ON jobs.job_id = employees.job_id
WHERE jobs.job_title ILIKE '%manager%'
AND employees.hire_date < now() - interval '15 years'

--String Function
--1
UPDATE employees
SET phone_number=999
WHERE phone_number LIKE '%124%'

--2
SELECT * FROM employees 
WHERE length(first_name)>8

--3
SELECT CONCAT(LEFT(first_name,1),last_name,'@example.com')
as email from employees

--4
SELECT employee_id, substring(email,1,LENGTH(email)-3)
from employees

--5
SELECT job_title,  SUBSTR(job_title,1, POSITION(' ' IN job_title)) 
FROM jobs;

--6
SELECT first_name "Name",
LENGTH(first_name) "Length"
FROM employees
WHERE first_name LIKE 'J%'
OR first_name LIKE 'M%'
OR first_name LIKE 'A%'
ORDER BY first_name ;

--7
SELECT first_name ,concat(salary,'$')  as SALARY
FROM employees