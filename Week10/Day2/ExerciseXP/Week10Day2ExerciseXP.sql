	
	CREATE TABLE items (
product_id SERIAL PRIMARY KEY,
item_name VARCHAR (50) NOT NULL,
price smallint NOT NULL
)

	CREATE TABLE customers (
customer_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (50) NOT NULL
)

SELECT * FROM items

SELECT * FROM items WHERE price>80

SELECT * FROM items WHERE price<300

SELECT * FROM customers WHERE last_name ='Smith'

SELECT * FROM customers WHERE last_name ='Jones'
SELECT * FROM customers WHERE last_name !='Scott'

