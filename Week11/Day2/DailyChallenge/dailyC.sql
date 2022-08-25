--part 1
--1

CREATE TABLE customer(
id SERIAL,
first_name VARCHAR(30),
last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_profile(
customer_profile_id SERIAL,
isLoggedIn BOOLEAN DEFAULT false,
customer_id int REFERENCES customer(customer_id));

--2
INSERT INTO customer (first_name,last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

--3
INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES(TRUE,1);
INSERT INTO customer_profile(isLoggedIn,customer_id)
VALUES(FALSE,2); 

--4
SELECT first_name from customer 
inner join customer_profile on customer_profile.customer_id = customer.customer_id
where customer_profile.isloggedin=true
--
SELECT customer.first_name ,customer_profile.isLoggedIn from customer 
LEFT JOIN customer_profile ON customer.customer_id= customer_profile.customer_id
--
SELECT COUNT(*) FROM customer_profile WHERE isloggedin = false

--part 2
--1 
CREATE TABLE book 
(book_id SERIAL PRIMARY KEY, title varchar(250) NOT NULL, author varchar(250) NOT NULL);

--2
INSERT INTO book (title,author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

--3
CREATE TABLE student (student_id SERIAL PRIMARY KEY, name varchar(250) NOT NULL UNIQUE, age smallint);

--4
INSERT INTO student (name, age)
VALUES 
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

--5
create table library (book_fk_id integer REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
student_fk_id integer REFERENCES student (student_id)ON DELETE CASCADE ON UPDATE CASCADE,
borrowstudent_fk_ided_date date);

--6
INSERT INTO library(student_fk_id,book_fk_id,borrowstudent_fk_ided_date)
VALUES
((SELECT student_id FROM student WHERE NAME='John')
 ,(SELECT book_id FROM book where title='Alice In Wonderland'), '2022-02-15'),
 ((SELECT student_id FROM student WHERE NAME='Bob')
 ,(SELECT book_id FROM book where title='To kill a mockingbird'), '2021-03-03'),
 ((SELECT student_id FROM student WHERE NAME='Lera')
 ,(SELECT book_id FROM book where title='Alice In Wonderland'), '2021-05-23'),
 ((SELECT student_id FROM student WHERE NAME='Bob')
 ,(SELECT book_id FROM book where title='Harry Potter'), '2021-08-12')
 ;
 --7
 	--	
	SELECT * FROM library;
	--
	SELECT student.name ,book.title from student
	JOIN library ON student.student_id = library.student_fk_id
	JOIN book ON book.book_id = library.book_fk_id
	--OR
	SELECT student.name ,book.title from student,library,book
	WHERE student.student_id=library.student_fk_id AND
	book.book_id=library.book_fk_id;
	--
	SELECT AVG(student.age) from student, library,book
	WHERE library.student_fk_id=student.student_id
	AND library.book_fk_id = 1
	
	--
	DELETE FROM student
	WHERE student_id =1
	--student is gone from library
