-- Q1 ANSWER: COUNT WITH 0 ( null = undefined)
SELECT COUNT(*) 
    FROM firsttab AS ft WHERE ft.id NOT IN ( SELECT id FROM secondtab WHERE id IS NULL );
	
--Q2 ANSWER: COUNT WITH 2
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

--Q3  ANSWER COUNT WITH 0
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
	
--Q4 ANSWER: COUNT WITH 2
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ); 