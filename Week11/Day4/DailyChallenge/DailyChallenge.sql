--Daily Challenge 

create table product_orders (
order_id int PRIMARY KEY,
order_region varchar(250) not null
);

create table items (
item_id serial PRIMARY KEY,
item_title varchar(250) not null,
price int not null,
order_id int REFERENCES product_orders(order_id)
);


INSERT INTO product_orders(order_id,order_region)
values
(1,'US'),
(2,'UK'),
(3,'US');

INSERT INTO items(item_title,price,order_id)
values('Tv', 300,1),
('Sofa', 200,1),
('Blender', 100,2),
('Chair', 50,3),
('Table', 250,3);

create function full_order_price(order_ids int)
returns int
language plpgsql
as
$$
declare full_price int;
begin
select sum(price)
into full_price
from items
where order_id=order_ids;
return full_price;
end;
$$;

select full_order_price(1)


