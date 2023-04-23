// select customer_number from (select customer_number, count(*) as number from Orders group by customer_number) as a  order by number desc limit 1


// select customer_number from orders
// group by customer_number
// order by count(*) desc limit 1;
