SELECT * FROM customer;

SELECT concat(first_name,' ',last_name) AS full_name FROM customer;

SELECT create_date FROM customer;

Select * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate DESC;

select address, phone from address where district='Texas';

SELECT * FROM film WHERE film_id=15 OR film_id=150;

SELECT film_id, title, description, rental_rate, length FROM film WHERE title='Forest Gump';

SELECT film_id, title, description, rental_rate, length FROM film WHERE title LIKE 'Fo%';

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;

SELECT customer.customer_id, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment ON  payment.customer_id=customer.customer_id 
ORDER BY customer_id ASC;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT title FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory);
-- Write a query to find which city is in which country.
SELECT city.country_id, city.city, country.country
FROM city
INNER JOIN country ON  city.country_id=country.country_id
ORDER BY country_id ASC;


